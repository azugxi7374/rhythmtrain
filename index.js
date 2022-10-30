document.addEventListener('DOMContentLoaded', () => {
    main();
});

const JUDGE_RYO = 25.025
const JUDGE_KA = 75.075
const JUDGE_FUKA = 108.442

function main() {
    const elem = document;
    elem.addEventListener('mousedown', (e) => {
        e.preventDefault();
        handle(e.clientX, e.clientY);
    }, { passive: false });
    document.addEventListener('touchstart', (ev) => {
        ev.preventDefault();
        const touch = ev.touches[0];
        handle(touch.clientX, touch.clientY);
    }, { passive: false });
    function handle(mx, my) {
        if (!state.pause) {
            playHandleTap(state);
        }
        animationTouch(mx, my);
    }

    // render
    const width = window.innerWidth - 10;
    const height = window.innerHeight - 10;
    const lineY = height * 4 / 5;
    initCanvas(document.getElementById('canvas1'), width, height, lineY);
    const state = {
        // bpm: 180,
        pause: true,
        offsetTime: -1, // pause:true時は無効
        time: 0,
        chart: createTestChart(),
        noteResults: {}, // {idx, judge, diff}
    };
    const notesCanvas = document.getElementById('canvas2');
    notesCanvas.height = height;
    notesCanvas.width = width;
    const nctx = notesCanvas.getContext('2d');
    const playBtn = document.querySelector('.playbtn');

    const FPS = 60;
    setInterval(() => {
        if (!state.pause) {
            const t1 = Date.now();
            const time = t1 - state.offsetTime;
            state.time = time;
            renderNotes(nctx, lineY, state);
        }
        renderPlayButton(playBtn, () => start(state), () => pause(state), state.pause);
    }, 1000 / FPS)

    window.state = state;
}

function pause(state) {
    state.pause = true
}

function start(state) {
    state.pause = false;
    state.offsetTime = Date.now() - state.time;
}

function playHandleTap(state) {
    // chartを前から順番に、まだ処理していない && 不可判定枠内
    const { chart, time } = state;
    for (let i = 0; i < chart.length; i++) {
        const diff = Math.abs(time - chart[i].t);
        if (state.noteResults[i] === undefined && diff < JUDGE_FUKA) {
            state.noteResults[i] = 0;
            break;
        }
    }
}