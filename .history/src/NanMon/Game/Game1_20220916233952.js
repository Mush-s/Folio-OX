import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";
import Character from "./Character/Character";
import { useState } from "react";
import "./Game1.css";
import Character2 from "./Character2/Character2";

const Game1 = () => {
  const [close, setClose] = useState(false);
  const [number, setNumber] = useState();
  const clickHandler1 = () => {
    setClose(true);
    setNumber(1);
  };

  const clickHandler2 = () => {
    setClose(true);
    setNumber(2);
  };
  return (
    <div className="game">
      <div className="main">
        <Back />
        {number === 1 && <Character />}
        {number === 2 && <Character2 />}
      </div>
      {!close && (
        <BeforeGame onClick={clickHandler1} onClick2={clickHandler2} />
      )}
    </div>
  );
};
export default Game1;
