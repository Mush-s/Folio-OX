import { useState } from "react";
import Back from "../../Components/Back/Back";
import Character from "./Character/Character";
import "./Game1.css";

const Game1 = () => {
  return (
    <div className="game">
      <Back />
      <Character />
    </div>
  );
};
export default Game1;
