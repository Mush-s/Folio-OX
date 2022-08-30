import { useEffect, useState } from "react";
import Cell from "./Cell";
import { Pattern } from "../Patterns/Pattern";
import GameOver from "../GameOver/GameOver";
import "./Game.css";

const Game = () => {
  const [player, setPlayer] = useState("O");
  const [countDown, setCountDown] = useState(8);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState();

  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    checkWin();
  });

  const isCellEmpty = (index) => cellValues[index] === "";

  const clickHandler = (index) => {
    if (isCellEmpty(index)) {
      setCountDown(countDown - 1);
      const newCellValues = [...cellValues];
      newCellValues[index] = player;
      setCellValues(newCellValues);
      if (player === "O") {
        setPlayer("X");
      } else {
        setPlayer("O");
      }
    }

    if (countDown === 0) {
      setGameOver(true);
      setResult("win");
    }
  };

  const resetHandler = () => {
    setPlayer("O");
    setCountDown(8);
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setResult();
  };

  const checkWin = () => {
    Pattern.forEach((currPa) => {
      const firstPlayer = cellValues[currPa[0]];
      if (firstPlayer === "") return;
      console.log(cellValues[currPa[0]]);
      let foundWiiningPattern = true;
      currPa.forEach((i) => {
        if (cellValues[i] !== firstPlayer) {
          foundWiiningPattern = false;
        }
      });

      if (foundWiiningPattern) {
        setGameOver(true);
        if (player === "O") {
          setResult("X is winner");
        } else {
          setResult("O is winner");
        }
      }
    });
  };
  return (
    <div className="game">
      {cellValues.map((value, index) => (
        <Cell key={index} value={value} onClick={() => clickHandler(index)} />
      ))}
      {gameOver && <GameOver onClick={resetHandler} />}
      <div className="result">{result}</div>
    </div>
  );
};

export default Game;
