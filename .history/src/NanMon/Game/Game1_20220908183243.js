import { useEffect, useState } from "react";
import Back from "../../Components/Back/Back";
import Character from "./Character/Character";
import "./Game1.css";

const Game1 = () => {
  const [char, setChar] = useState([{ id: "", img: "" }]);
  const [charName, setCharName] = useState("");

  useEffect(() => {
    const fetchchara = async () => {
      const characters = await fetch(
        "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Character.json"
      );

      if (!characters.ok) {
        console.log(characters);
      }

      const responseDate = await characters.json();
      const loadedCharacters = [];
      for (const key in responseDate) {
        loadedCharacters.push({
          id: key,
          img: responseDate[key].img,
          name: responseDate[key].name,
        });
      }
      setChar(loadedCharacters);
      console.log(charName);
    };
    fetchchara();
  }, []);

  console.log(char);
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
