document.addEventListener('DOMContentLoaded', () => {
    refreshIfNeed();
    main();
});

function refreshIfNeed() {
    const maxAge = 30 * 1000;
    const href = window.location.href
    const url = new URL(href);
    const _ = url.searchParams.get('_');
    const now = Date.now();

    if (_ === null || !(/^\d+/.test(_)) || _ + maxAge < now) {
        url.searchParams.set('_', now)
        window.location.href = url.href;
    }
}


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
        for (const touch of ev.touches) {
            handle(touch.clientX, touch.clientY);
        }
    }, { passive: false });
    function handle(mx, my) {
        if (!state.pause) {
            playHandleTap(state, mx, my);
        }
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
