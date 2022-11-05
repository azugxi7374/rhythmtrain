import { Chart } from "./types";

type ViewSet = {
    W: number, H: number,
    lineY: number,
    ctx2: CanvasRenderingContext2D,
}
type Settings = {
    scrollSpeed: number,
}
type ChartState = {
    chart: Chart,
    time: number,
    noteResults: any[],
}

const nLane = 4;
const JUDGE_RYO = 25.025
const JUDGE_KA = 75.075
const JUDGE_FUKA = 108.442

// game
// 譜面のフォーマット
// 画面描写と入力処理
// 判定とか
// create: canvas要素とか設定とか受け取って初期化
export default function create(W: number, H: number, canvas1: HTMLCanvasElement, canvas2: HTMLCanvasElement) {
    for (const c of [canvas1, canvas2]) {
        c.width = W;
        c.height = H;
    };
    const [ctx1, ctx2] = [canvas1, canvas2].map(c => c.getContext('2d') as CanvasRenderingContext2D);
    const lineY = getJudgeLineY(W, H);
    const gameState = {
        pause: false,
        nextProcessLane: new Set<number>()
    }

    const viewSet: ViewSet = { W, H, lineY, ctx2 }
    const settings: Settings = {
        scrollSpeed: 1.0, // 画面比
    }

    ctx1.fillRect(0, lineY - 2, W, 4);
    initEventListeners(canvas2, (ln => gameState.nextProcessLane.add(ln)),
        () => gameState.pause, viewSet)

    const res = {
        handleFrame: (chart: Chart, time: number, noteResults) => handleFrame({ chart, time, noteResults }, gameState.nextProcessLane, viewSet, settings),
        pause: (flg: boolean) => gameState.pause = flg
    }
    return res;
}

function handleFrame(chartState: ChartState, nextProcessLane: Set<number>, viewSet: ViewSet, settings: Settings) {

    // noteを入力処理してrenderする
    for (const lane of Array.from(nextProcessLane.values())) {
        // TODO 同フレームだからlanesでよくない？
        handleTapLane(chartState, lane);
    }
    nextProcessLane.clear();
    renderNotes(chartState, viewSet, settings);
}


function handleTapLane(chartState: ChartState, lane: number) {
    const { chart, time, noteResults } = chartState;

    // chartを前から順番に、まだ処理していない && 不可判定枠内
    for (let i = 0; i < chart.length; i++) {
        const diff = Math.abs(time - chart[i].t);
        const noteTimeFlg = (noteResults[i] === undefined && diff < JUDGE_FUKA);
        const noteXFlg = chart[i].type === lane
        if (noteTimeFlg && noteXFlg) {
            noteResults[i] = 0;
            break;
        }
    }
}


function renderNotes(chartState: ChartState, viewSet: ViewSet, settings: Settings) {
    const { W, H, ctx2, lineY } = viewSet;
    const { scrollSpeed: _scrollSpeed } = settings
    const pxPerMs = _scrollSpeed * H / 1000;
    const { chart, time, noteResults } = chartState;

    ctx2.clearRect(0, 0, W, H);
    chart.forEach(({ t, type }, i) => {
        if (noteResults[i] === undefined) {
            const elapsed = time - t;
            const noteY = lineY + elapsed * pxPerMs;
            const [noteX, w] = calcNoteX(type, viewSet);
            if (0 <= noteY && noteY <= 3000) {
                ctx2.fillRect(noteX, noteY - 2, w, 4);
            }
        }
    })
}

function initEventListeners(elem, addPressLanes, getPause, viewSet: ViewSet) {
    function getLane(x, y): number | null {
        for (let lane = 0; lane < nLane; lane++) {
            const [x0, x1] = calcNoteX(lane, viewSet);
            const flg = (x0 <= x && x <= x0 + x1);
            if (flg) { return lane }
        }
        return null;
    }
    const eventHandlers = [
        ['mousedown', (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            const lane = getLane(e.clientX, e.clientY);
            if (lane !== null) {
                addPressLanes(lane);
            }
        }, { passive: false }],
        ['touchstart', (e: TouchEvent) => {
            e.preventDefault();
            e.stopPropagation();
            // TODO ↓
            // @ts-ignore
            for (const touch of e.touches) {
                const lane = getLane(touch.clientX, touch.clientY);
                if (lane !== null) {
                    addPressLanes(lane);
                }
            }
        }, { passive: false }],
        // TODO add key dfjk
    ]

    for (const [evn, func, opt] of eventHandlers as any) {
        elem.addEventListener(
            evn, (e: Event) => !getPause() && func(e), opt
        )
    }
}

/////////////////////////////////////////
function calcNoteX(i: number, viewSet: ViewSet) {
    const W = viewSet.W
    const pad = 50;
    // |-pad-|--------|-pad-|
    const wlane = W - pad * 2;
    const pad2 = 5;
    return [pad + wlane * i / nLane + pad2, wlane / nLane - pad2];
}

function getJudgeLineY(W: number, H: number) {
    return Math.floor(H * 4 / 5);
}