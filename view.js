
function initCanvas(canvas, width, height, lineY) {
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    ctx.fillRect(0, lineY - 2, width, 4);
}

function renderPlayButton(btn, start, pause, pauseFlg) {
    if (btn.dataset.pause === pauseFlg.toString()) {
        // NOP
    } else {
        btn.dataset.pause = pauseFlg
        if (pauseFlg) {
            btn.innerHTML = `<img src="lib/play-solid.svg">`;
            ['mousedown', 'touchstart'].forEach(en => {
                btn.firstElementChild.addEventListener(en, () => {
                    start();
                })
            });
        } else {
            btn.innerHTML = `<img src="lib/pause-solid.svg">`;
            ['mousedown', 'touchstart'].forEach(en => {
                btn.firstElementChild.addEventListener(en, () => {
                    pause();
                })
            });
        }
    }
}

function calcNoteX(nLane, i) {
    const W = 600;
    const pad = 50;
    // |-pad-|--------|-pad-|
    const wlane = W - pad * 2;
    return [pad + wlane * i / nLane, wlane / nLane - 10];
}

function renderNotes(ctx, lineY, state) {
    const scrollSpeed = 300 / 1000; // px/ms

    // TODO width, height
    ctx.clearRect(-1, 0, 3000, 3000);

    // 1999px まで見る
    // 一旦全部見るのでコメントアウト
    // const tAheadLen = 1999 / scrollSpeed;
    // const tBehindLen = 999 / scrollSpeed;

    state.chart.forEach(({ t, type }, i) => {
        if (state.noteResults[i] === undefined) {

            const elapsed = state.time - t;
            const noteY = lineY + elapsed * scrollSpeed;
            const [noteX, w] = calcNoteX(4, type);
            ctx.fillRect(noteX, noteY - 1, w, 4);
        }
    })

}

function playHandleTap(state, mx, my) {
    console.log({ mx, my });
    const nLane = 4;
    // chartを前から順番に、まだ処理していない && 不可判定枠内
    const { chart, time } = state;
    for (let i = 0; i < chart.length; i++) {
        const diff = Math.abs(time - chart[i].t);
        const noteTimeFlg = (state.noteResults[i] === undefined && diff < JUDGE_FUKA);
        const [x0, x1] = calcNoteX(nLane, chart[i].type);
        const noteXFlg = (x0 <= mx && mx <= x0 + x1);
        if (noteTimeFlg && noteXFlg) {
            state.noteResults[i] = 0;
            break;
        }
    }
}



/*
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
*/

