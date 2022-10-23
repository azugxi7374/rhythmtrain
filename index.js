document.addEventListener('DOMContentLoaded', () => {
    main();
});

const JUDGE_RYO = 25.025
const JUDGE_KA = 75.075
const JUDGE_FUKA = 108.442

function createTestChart() {
    // t=1000から順に、4/4で1拍ずつ、16小節
    const bpm = 120;
    const N = 16 * 4;
    const chart = [];
    for (let i = 0; i < N + 1; i++) {
        if (i % 4 === 3) {
            // skip
        } else {
            chart.push({
                t: 1000 + i * (60 * 1000 / bpm),
                type: 1,
            });
        }
    }
    return chart;
}

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
        const now = Date.now();
        playHandleTap(state);
        animationTouch(mx, my);
    }

    const width = window.innerWidth - 10;
    const height = window.innerHeight - 10;
    const lineY = height * 4 / 5;
    initCanvas(document.getElementById('canvas1'), width, height, lineY);
    const state = {
        // bpm: 180,
        offsetTime: -1,
        time: 0,
        chart: createTestChart(),
        noteResults: {}, // {idx, judge, diff}
    };
    const notesCanvas = document.getElementById('canvas2');
    notesCanvas.height = height;
    notesCanvas.width = width;
    const nctx = notesCanvas.getContext('2d');

    const FPS = 60;
    setInterval(() => {
        if (state.offsetTime < 0) {
            // 初回のみ
            state.offsetTime = Date.now();
        }
        const t1 = Date.now();
        const time = t1 - state.offsetTime;
        state.time = time;
        renderNotes(nctx, lineY, state);
    }, 1000 / FPS)

    window.state = state;
}

function initCanvas(canvas, width, height, lineY) {
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    ctx.fillRect(0, lineY - 2, width, 4);
}

function renderNotes(ctx, lineY, state) {
    const scrollSpeed = 300 / 1000; // px/ms

    // TODO width, height
    ctx.clearRect(0, 0, 3000, 3000);

    // 2000px まで見る
    // 一旦全部見るのでコメントアウト
    // const tAheadLen = 2000 / scrollSpeed;
    // const tBehindLen = 1000 / scrollSpeed;

    state.chart.forEach(({ t, type }, i) => {
        if (state.noteResults[i] === undefined) {
            // type=1とする
            const elapsed = state.time - t;
            const noteY = lineY + elapsed * scrollSpeed;
            const noteX = 300;
            ctx.fillRect(noteX, noteY - 2, 50, 4);
        }
    })
}

function playHandleTap(state) {
    // chartを前から順番に、まだ処理していない && 不可判定枠内
    const { chart, time } = state;
    console.log(chart, time);
    for (let i = 0; i < chart.length; i++) {
        const diff = Math.abs(time - chart[i].t);
        if (state.noteResults[i] === undefined && diff < JUDGE_FUKA) {
            state.noteResults[i] = 0;
            break;
        }
    }
}

function animationTouch(x, y) {
    for (let i = 0; i < 3; i++) {
        const elem = document.createElement('div');
        elem.className = "effect_touch";
        document.body.appendChild(elem);
        const size = 50;
        elem.style = `
            width:${size}px;
            height:${size}px;
            background-color: #0000ff;
            top:${y}px;
            left:${x}px;
        `
        const dur = 300;
        const rot1 = Math.random() * 360;
        const rot2 = rot1 + Math.random() * 360;
        const tx = (Math.random() - 0.5) * 300;
        const ty = (Math.random() - 0.5) * 300;
        anime({
            targets: elem,
            opacity: 0,
            duration: dur,
            translateX: tx,
            translateY: ty,
            easing: 'easeOutQuad',
            rotate: [rot1, rot2],
            scale: [1, 0],
        });
        setTimeout(() => elem.remove(), dur);
    }
    const div = document.createElement('div');
    document.body.appendChild(div);

    const size = 5;
    const dur = 300;
    div.style = `
            position: fixed;
            width: ${size * 2}px;
            height: ${size * 2}px;
            top: ${y - size}px;
            left: ${x - size}px;
            border: 0.5px solid blue;
            border-radius: 50%;
        `
    anime({
        targets: div,
        opacity: 0,
        duration: dur,
        easing: 'easeOutQuad',
        scale: 20,
    });
    setTimeout(() => div.remove(), dur + 10);
}



