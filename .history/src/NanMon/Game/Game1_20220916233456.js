import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";
import Character from "./Character/Character";
import { useState } from "react";
import "./Game1.css";

const Game1 = () => {
  const [close, setClose] = useState(false);
  const [number, setNumber] = useState();
  const clickHandler = () => {
    setClose(true);
  };
  return (
    <div className="game">
      <div className="main">
        <Back />
        {}
        <Character />
      </div>
      {!close && <BeforeGame onClick={clickHandler} />}
    </div>
  );
};
export default Game1;
