import Cell from "../components/Cell";

const Grid = (props) => {
    const grid = [];
    for (let r = 0; r < props.height; r++) {
        const row = [];
        for (let c = 0; c < props.width; c++) {
            row.push(0);
        }
        grid.push(row);
    }

    let placed = 0;
    while (placed < props.mines) {
        const r = Math.floor(Math.random() * props.height);
        const c = Math.floor(Math.random() * props.width);
        if (grid[r][c] != 'm') {
            grid[r][c] = 'm';
            for (let w = Math.max(0, r - 1); w <= Math.min(props.height - 1, r + 1); w++) {
                for (let h = Math.max(0, c - 1); h <= Math.min(props.width - 1, c + 1); h++) {
                    if (grid[w][h] != 'm') {
                        grid[w][h]++;
                    }
                }
            }
            placed++;
        }
    }

    console.log(grid)

    return <>
        <div className="minesweeper">
            { grid.map((row, index) => (
                <div key={index} className="minesweeper__row">
                    { row.map((cell, index) => (
                        <Cell key={index} state='hidden' value={cell}></Cell>
                    ))}
                </div>
            )) }
        </div>
    </>
}

export default Grid