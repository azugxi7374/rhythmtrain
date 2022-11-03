import { initCanvas, playHandleTap, renderNotes, renderPlayButton } from "./view"
import { createTestChart } from "./chart";

document.addEventListener('DOMContentLoaded', () => {
    refreshIfNeed();
    main();
});

// いらないかも
function refreshIfNeed() {
    const maxAge = 30 * 1000;
    const href = window.location.href
    const url = new URL(href);
    const _ = url.searchParams.get('_');
    const now = Date.now();

    if (_ === null || !(/^\d+/.test(_)) || Number(_) + maxAge < now) {
        url.searchParams.set('_', now.toString())
        window.location.href = url.href;
    }
}



function main() {
    const elem = document;
    elem.addEventListener('mousedown', (e) => {
        e.preventDefault();
        handle(e.clientX, e.clientY);
    }, { passive: false });
    document.addEventListener('touchstart', (ev) => {
        ev.preventDefault();
        // @ts-ignore
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
    // @ts-ignore
    notesCanvas.height = height;
    // @ts-ignore
    notesCanvas.width = width;
    // @ts-ignore
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

    // @ts-ignore
    window.state = state;
}

// @ts-ignore
function pause(state) {
    state.pause = true
}

// @ts-ignore
function start(state) {
    state.pause = false;
    state.offsetTime = Date.now() - state.time;
}
