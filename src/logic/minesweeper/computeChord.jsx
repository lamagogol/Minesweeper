

function computeChord(grid, cellState) {
    const result = grid.map(row => [...row]);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (cellState[i][j] == 'flag') {
                for (let w = Math.max(0, i - 1); w <= Math.min(grid.length - 1, i + 1); w++) {
                    for (let h = Math.max(0, j - 1); h <= Math.min(grid[0].length - 1, j + 1); h++) {
                        if (grid[w][h] != 'm') {
                            result[w][h] --;
                        }
                    }
                }
            }
        }
    }
    return result;
}

export default computeChord;