import Cell from "./Cell";

export default function Board({ grid, onReveal, onFlag }) {
    return (
        <div
            className="board"
            style={{ gridTemplateColumns: `repeat(${grid.cols}, var(--cell-size))` }}
        >
            {grid.cells.map((cell, i) => (
                <Cell
                    key={i}
                    index={i}
                    cell={cell}
                    onReveal={onReveal}
                    onFlag={onFlag}
                />
            ))}
        </div>
    );
}