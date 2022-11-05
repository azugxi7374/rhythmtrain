import { renderPlayButton } from "./view"
import { createTestChart } from "./chart";
import Standard4Lane from "./game_standard4Lane"

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
    const game = createView(Standard4Lane)

    const state = {
        // bpm: 180,
        pause: true,
        offsetTime: -1, // pause:true時は無効
        time: 0,
        chart: createTestChart(),
        noteResults: {}, // {idx, judge, diff}
    };

    const playBtn = document.querySelector('.playbtn');

    const FPS = 60;

    setInterval(() => {
        if (!state.pause) {
            const t1 = Date.now();
            const time = t1 - state.offsetTime;
            state.time = time;
        }
        game.pause(state.pause);
        game.handleFrame(state.chart, state.time, state.noteResults);

        renderPlayButton(playBtn, () => start(state), () => pause(state), state.pause);
    }, 1000 / FPS)

    // @ts-ignore
    window.state = state;
}

// TODO 名前
function createView(Game) {
    const H = window.innerHeight - 10;
    const W = window.innerWidth - 10;

    const c1 = document.querySelector('#canvas1');
    const c2 = document.querySelector('#canvas2');
    const game = Game(W, H, c1, c2);

    return game;
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
