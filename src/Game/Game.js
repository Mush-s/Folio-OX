import { useState } from "react";
import Cell from "./Cell";

const Game = () => {
  const [cellValue, setCellValue] = useState([
    "",
    "X",
    "O",
    "O",
    "",
    "",
    "",
    "",
    "",
  ]);
  const clickHandler = (index) => {
    setCellValue([
        "",
        "X",
        "O",
        "O",
        "O",
        "",
        "",
        "",
        "",
      ]);
  };
  return (
    <div className="Game">
      {cellValue.map((value, index) => (
        <Cell key={index} value={value} onClick={clickHandler} />
      ))}
    </div>
  );
};

export default Game;
