import reveal from "./reveal";



function flagReveal(grid, chord, cellState, index1, index2) {
    // if (grid[index1][index2] == 0 && (cellState[index1][index2] == "hidden")) {
        let final = cellState.map(row => [...row]);
        let lenGrid = grid.length;
        let lenRow = grid[0].length;
        for (let w = Math.max(0, index1 - 1); w <= Math.min(lenGrid - 1, index1 + 1); w++) {
            for (let h = Math.max(0, index2 - 1); h <= Math.min(lenRow - 1, index2 + 1); h++) {
                if (final[w][h] == 'hidden') {
                    final[w][h] = 'open';
                    console.log(chord)
                    if (grid[w][h] == 0) {
                        final = reveal(grid, cellState, w, h);
                    }
                }
            }
        }
    // }
    console.log(final)
    return final
}

export default flagReveal;