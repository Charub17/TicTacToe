import React from "react";
import "./gameboard.css";

export const Gamingboard = ({ handleClick, gameboard }) => {
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    console.log("cb", rowIndex, colIndex);
                    return handleClick(rowIndex, colIndex);
                  }}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
