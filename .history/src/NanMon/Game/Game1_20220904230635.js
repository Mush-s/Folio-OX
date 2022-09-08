import { useEffect, useState } from "react";
import Back from "../../Components/Back/Back";
import Character from "./Character/Character";
import "./Game1.css";

const Game1 = () => {
  const [char, setChar] = useState([{ id: "", img: "" }]);
  const namedHandler = () => {};
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
  }, []);

  const randomHandler = () => {
    location.reload();
  };
  console.log(char);
  return (
    <div className="game">
      <Back />
      <Character char={char} />
      <div className="inputs">
        <form className="make-character" onSubmit={namedHandler}>
          <p>Please name character</p>
          <input />
          <input type="submit" />
        </form>
        <button onClick={randomHandler}>NEXT</button>
        <form className="answer-charcter" onSubmit={answerHandler}>
          <p>Please answer name</p>
          <input />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Game1;
