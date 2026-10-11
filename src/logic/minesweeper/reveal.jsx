

function reveal(grid, cellState, index1, index2) {
    if (grid[index1][index2] != 0 && cellState[index1][index2] == "hidden") {
        const next = cellState.map(row => [...row]);
        next[index1][index2] = 'open';
        return (next)
    }
    else if (grid[index1][index2] == 0 && cellState[index1][index2] == "hidden") {
        let final = cellState.map(row => [...row]);
        final[index1][index2] = "open";
        console.log(final)
        let lenGrid = grid.length;
        let lenRow = grid[0].length;
        for (let w = Math.max(0, index1 - 1); w <= Math.min(lenGrid - 1, index1 + 1); w++) {
            for (let h = Math.max(0, index2 - 1); h <= Math.min(lenRow - 1, index2 + 1); h++) {
                if (final[w][h] == 'hidden') {
                    final = reveal(grid, final, w, h);
                }
            }
        }
        return (final);
    }
}

export default reveal