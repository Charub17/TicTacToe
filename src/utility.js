export const deriveStateGameTurn = (gameTurn) =>{
    let currentPlayer = "X";
    if (gameTurn.length > 0 && gameTurn[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
}