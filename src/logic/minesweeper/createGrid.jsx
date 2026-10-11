

function createGrid(height, width, mines) {
    const grid = [];
    for (let r = 0; r < height; r++) {
        const row = [];
        for (let c = 0; c < width; c++) {
            row.push(0);
        }
        grid.push(row);
    }

    let placed = 0;
    while (placed < mines) {
        const r = Math.floor(Math.random() * height);
        const c = Math.floor(Math.random() * width);
        if (grid[r][c] != 'm') {
            grid[r][c] = 'm';
            for (let w = Math.max(0, r - 1); w <= Math.min(height - 1, r + 1); w++) {
                for (let h = Math.max(0, c - 1); h <= Math.min(width - 1, c + 1); h++) {
                    if (grid[w][h] != 'm') {
                        grid[w][h]++;
                    }
                }
            }
            placed++;
        }
    }

    console.log(grid)

    return grid
}

export default createGrid