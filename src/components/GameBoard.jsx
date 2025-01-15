//import { useState } from "react";



export default function GameBoard({ onSelectSquare, board }) {
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex, columnIndex, playerSymbol) {
    //     setGameBoard((prevGameBoard) => {
    //         //prevGameBoard[rowIndex][columnIndex] = 'X'; //not recommended!
    //         const updatedBoard=[...prevGameBoard.map(innerArray => [...innerArray])]; //copy the previous board into the updated one
    //         updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button> {/* () => handleSelectSquare(rowIndex, columnIndex) */}
                            </li>
                        ))} {/* playerSymbol = column */}
                    </ol>
                </li>
            ))}
        </ol>
    );
}