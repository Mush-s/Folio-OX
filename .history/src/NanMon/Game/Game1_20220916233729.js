import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";
import Character from "./Character/Character";
import { useState } from "react";
import "./Game1.css";
import Character2 from "./Character2/Character2";

const Game1 = () => {
  const [close, setClose] = useState(false);
  const [number, setNumber] = useState();
  const clickHandler = () => {
    setClose(true);
    setNumber(1);
  };
  return (
    <div className="game">
      <div className="main">
        <Back />
        {number === 1 && <Character />}
        {number === 2 && <Character2 />s}
      </div>
      {!close && <BeforeGame onClick={clickHandler} />}
    </div>
  );
};
export default Game1;
