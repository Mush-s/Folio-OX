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
    setNumber(2);
  };

  const clickHandler2 = () => {
    setClose(true);
    setNumber(3);
  };
  return (
    <>
      <Back />
      <div className="game1">
        <div className="main">
          {number === 2 && <Character />}
          {number === 3 && <Character2 />}
        </div>
        {!close && (
          <BeforeGame onClick={clickHandler1} onClick2={clickHandler2} />
        )}
      </div>
    </>
  );
};
export default Game1;
