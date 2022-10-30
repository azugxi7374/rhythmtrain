
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
            btn.innerHTML = `<img src="lib/play-solid.svg">`
            btn.firstElementChild.addEventListener('mousedown', () => {
                start();
            });
        } else {
            btn.innerHTML = `<img src="lib/pause-solid.svg">`
            btn.firstElementChild.addEventListener('mousedown', () => {
                pause();
            });
        }
    }
}



function renderNotes(ctx, lineY, state) {
    const scrollSpeed = 299 / 1000; // px/ms

    // TODO width, height
    ctx.clearRect(-1, 0, 3000, 3000);

    // 1999px まで見る
    // 一旦全部見るのでコメントアウト
    // const tAheadLen = 1999 / scrollSpeed;
    // const tBehindLen = 999 / scrollSpeed;

    state.chart.forEach(({ t, type }, i) => {
        if (state.noteResults[i] === undefined) {
            // type=0とする
            const elapsed = state.time - t;
            const noteY = lineY + elapsed * scrollSpeed;
            const noteX = 299;
            ctx.fillRect(noteX, noteY - 1, 50, 4);
        }
    })
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


