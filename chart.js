
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

