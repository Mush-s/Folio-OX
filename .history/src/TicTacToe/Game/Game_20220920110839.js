import { useEffect, useState } from "react";
import Cell from "./Cell";
import { Pattern } from "../Patterns/Pattern";
import GameButtons from "./GameButtons/GameButtons";

import "./Game.css";
import { OverLay } from "../..";
import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";

const Game = () => {
  const [player, setPlayer] = useState("O");
  const [countDown, setCountDown] = useState(8);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState();
  const [mode, setMode] = useState("Normal");
  const [time, setTime] = useState(5);
  const [oClose, setOclose] = useState(false);
  const [xClose, setXclose] = useState(false);
  const [close, setClose] = useState(false);

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

  let timer;
  const updataCount = () => {
    timer = setInterval(() => {
      setTime((preC) => preC - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
      if (player === "O") {
        setResult("X is Winner");
        setGameOver(true);
      } else {
        setResult("O is Winner");
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    if (close) {
      !gameOver && updataCount();
      console.log(time);
      return () => clearInterval(timer);
    }
  });

  useEffect(() => {
    setTime(5);
  }, [player]);

  const isCellEmpty = (index) => cellValues[index] === "";

  //Cell Clicked ここから

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

      if (countDown === 0) {
        setGameOver(true);
        setResult("引き分けです");
      }
      // Repaint mode 処理
    } else {
      if (mode === "Repaint") {
        setCountDown(countDown - 1);
        const newCellValues = [...cellValues];
        newCellValues[index] = player;
        setCellValues(newCellValues);

        if (player === "O") {
          setPlayer("X");
        } else {
          setPlayer("O");
        }

        if (player === "O") {
          setoclose(true);
          if (oClose) {
            setMode("Normal");
          }
        }
        if (player === "X") {
          setXclose(true);
          if (xClose) {
            setMode("Normal");
          }
        }
      }
      setMode("Normal");
    }
  };

  //Reset Button ここから

  const resetHandler = () => {
    setTime(5);
    setPlayer("O");
    setCountDown(8);
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setGameOver(false);
    setResult();
  };

  //Change button ここから

  const ChangeHandler = () => {
    if (mode === "Normal") {
      setMode("Repaint");
    }
    if (mode === "Repaint") {
      setMode("Normal");
    }
    setCountDown((preState) => preState + 1);
  };
  //勝ち負け判定

  const checkWin = () => {
    Pattern.forEach((currPa) => {
      const firstPlayer = cellValues[currPa[0]];
      if (firstPlayer === "") return;
      console.log(firstPlayer);
      let foundWiiningPattern = true;
      currPa.forEach((i) => {
        if (cellValues[i] !== firstPlayer) {
          foundWiiningPattern = false;
        }
      });

      if (foundWiiningPattern) {
        if (player === "O") {
          setResult("X is Winner");
          setGameOver(true);
        } else {
          setResult("O is Winner");
          setGameOver(true);
        }
      }
    });
  };

  const closeHandler = () => {
    setClose(true);
  };
  return (
    <div className="game">
      <Back />
      <div className="tictactou">
        <div className="result">{result}</div>
        {!gameOver && <div className="turn">{player}'s Turn</div>}
        {!gameOver && <p className="timer">Have {time} seconds</p>}
        {cellValues.map((value, index) => (
          <Cell key={index} value={value} onClick={() => clickHandler(index)} />
        ))}
        <GameButtons
          mode={mode}
          onClick={resetHandler}
          onChange={ChangeHandler}
        />
        {gameOver && <OverLay onClick={resetHandler} result={result} />}
      </div>
      {!close && <BeforeGame onClick={closeHandler} />}
    </div>
  );
};

export default Game;
