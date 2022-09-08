import { useEffect, useState } from "react";
import Back from "../../Components/Back/Back";
import Character from "./Character/Character";
import "./Game1.css";

const Game1 = () => {
  const [char, setChar] = useState([{ id: "", img: "" }]);
  const [charName, setCharName] = useState("");
  const [reload, setReload] = useState(true);

  const changeHandler = (e) => {
    e.preventDefault();
    setCharName(e.target.value);
  };
 

  const answerHandler = () => {};

  useEffect(() => {
    const fetchchara = async () => {
      const characters = await fetch(
        "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Characters.json"
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
        });
      }
      setChar(loadedCharacters);
    };
    fetchchara();
  }, [reload]);

  const reloadHandler = () => {
    window.location.reload();
    setReload((prestate) => !prestate);
  };

  console.log(charName);
  console.log(char);
  return (
    <div className="game">
      <Back />
      <Character char={char} />
    </div>
  );
};
export default Game1;
