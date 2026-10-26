import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import BoardSizeForm from "./components/BoardSizeForm";

function App() {
    const [boardSize, setBoardSize] = useState({"height" : "10", "width" : "10", "mines" : "10"})

    return (
        <>
        <BoardSizeForm onSubmit={setBoardSize} defaultValues={boardSize ?? undefined} />
        <p>Height: {boardSize.height}</p>
        <p>Width: {boardSize.width}</p>
        <p>Mines: {boardSize.mines}</p>
		<Board key={`${boardSize.height}-${boardSize.width}-${boardSize.mines}`} height={boardSize["height"]} width={boardSize["width"]} mines={boardSize["mines"]}></Board>
        </>
    );
}

export default App