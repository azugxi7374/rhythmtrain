document.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    const elem = document;
    elem.addEventListener('mousedown', (e) => {
        animationTouch(e.x, e.y);
        console.log(e);
    });
}

function animationTouch(x, y) {
    for (let i = 0; i < 3; i++) {
        const elem = document.createElement('div');
        elem.className = "effect_touch";
        document.body.appendChild(elem);
        const size = 30;
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
}



