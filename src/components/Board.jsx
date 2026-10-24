import { useEffect, useMemo, useRef, useState } from "react"
import createGrid from "../logic/minesweeper/createGrid"
import Cell from "./Cell";
import reveal from "../logic/minesweeper/reveal";
import flag from "../logic/minesweeper/flag";
import computeChord from "../logic/minesweeper/computeChord";
import flagReveal from "../logic/minesweeper/flagReveal";

function putInGrid(grid, index1, index2, value) {
    const next = grid.map(row => [...row]);
    next[index1][index2] = value;
    return next;
}

const Board = (props) => {
    const [grid] = useState(() => createGrid(props.height, props.width, props.mines));
    const [cellState, setCellState] = useState(() => grid.map(row => row.map(() => "hidden")));
    console.log(grid)
    console.log(cellState)
    const chord = useMemo(() => computeChord(grid, cellState), [cellState]);
    console.log(chord)

    return <>
        <div className="minesweeper">
            { grid.map((row, index1) => (
                <div key={index1} className="minesweeper__row">
                    { row.map((cell, index2) => (
                        <Cell key={index2} state={cellState[index1][index2]} value={cell} chord={chord[index1][index2]}
                        reveal={() => setCellState(reveal(grid, cellState, index1, index2))}
                        flag={() => setCellState(putInGrid(cellState, index1, index2, flag(cellState[index1][index2])))}
                        flagReveal={() => setCellState(flagReveal(grid, chord, cellState, index1, index2))}></Cell>
                    ))}
                </div>
            )) }
        </div>
    </>
}

export default Board