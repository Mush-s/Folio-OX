import Back from "../../Components/Back/Back";
import BeforeGame from "../BeforeGame/BeforeGame";
import Character from "./Character/Character";
import { useState } from "react";
import "./Game1.css";

const Game1 = () => {
  const [start, setStart] = useState(false);
  return (
    <div className="game">
      <Back />
      <Character />
      <BeforeGame />
    </div>
  );
};
export default Game1;
