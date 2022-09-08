import { useState } from "react";
import Back from "../../Components/Back/Back";
import Character from "./Character/Character";
import "./Game1.css";

const Game1 = () => {
  const [charName, setCharName] = useState("");
  const [char, setChar] = useState({
    id: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2VfwYNAH3zcUqi46YyKcMkCmYShfJDi94A&usqp=CAU",
    name: "",
  });

  return (
    <div className="game">
      <Back />
      <Character
        char={char}
        setChar={setChar}
        setCharName={setCharName}
        charName={charName}
      />
    </div>
  );
};
export default Game1;
