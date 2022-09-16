import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";
import Character from "./Character/Character";
import { useState } from "react";
import "./Game1.css";

const Game1 = () => {
  const [close, setClose] = useState(false);
  const clickHandler = () => {
    setClose(true);
  };
  return (
    <div className="game">
      {close && <Back /> && <Character />}
      {!close && <BeforeGame onClick={clickHandler} />}
    </div>
  );
};
export default Game1;
