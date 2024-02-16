import { useState } from "react";
import { Gamingboard } from "./Components/Gameboard/Gameboard";
import { Player } from "./Components/Player";
import { Log } from "./Components/Log/log";
import { deriveStateGameTurn } from "./utility";
import { WINNING_COMBINATIONS, initialGame } from "./constants";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let gameboard = initialGame;

  gameTurns.forEach((turn) => {
    const {
      square: { rowIndex, colIndex },
      player,
    } = turn;
    gameboard[rowIndex][colIndex] = player;
  });

  const activePlayer = deriveStateGameTurn(gameTurns);

  let winner = null;
  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameboard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  });

  const handleChangePlayer = (rowIndex, colIndex) => {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveStateGameTurn(prevTurn);

      const updatedTurns = [
        {
          square: { rowIndex: rowIndex, colIndex: colIndex },
          player: currentPlayer,
        },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p>You have won, {winner}! </p>}
        <Gamingboard handleClick={handleChangePlayer} gameboard={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
