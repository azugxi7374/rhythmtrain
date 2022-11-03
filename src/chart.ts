const test2 = `
#BPM=120
2244 2244 1248 8421
3c3c 9696 5a5a edb7
0248 8420
`

// const chart2 = parseTextChart(test2);

function parseTextChart(text: string) {
    let bpm = 120;
    const lines = text.split("\n");
    const barList = [];
    while (lines.length > 0) {
        let line = lines.shift();
        line = line.trim();
        if (line.length === 0) {
            // 空行ならNOP
        } else if (/^#BPM=[0-9]+$/.test(line)) {
            bpm = parseInt(line.slice("#BPM=".length));
        } else {
            // TODO ↑正規表現判定する
            barList.push(...line.split(" "));
        }
    }
    // console.log(JSON.stringify({ bpm, barList }));
    return convertChart(bpm, barList);
}

function convertChart(bpm: number, barList: string[]) {
    const chart = [];
    for (let i = 0; i < barList.length; i++) {
        for (let k = 0; k < barList[i].length; k++) {
            const nt = Number.parseInt(barList[i].charAt(k) + "", 16);
            for (let bi = 0; bi < 4; bi++) {
                if ((nt >> bi & 1) === 1) {
                    chart.push({
                        t: 1000 + (i * 4 + k) * (60 * 1000 / bpm),
                        type: bi
                    });
                }
            }
        }
    }
    // @ts-ignore
    window.___chart = chart;
    return chart;
}


export function createTestChart() {
    return parseTextChart(test2);
    /*
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
    return chart;*/
}

