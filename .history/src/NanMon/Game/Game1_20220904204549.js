import { useEffect, useState } from "react";
import Back from "../../Components/Back/Back";
import "./Game1.css";

const Game1 = () => {
  const [char, setChar] = useState([]);
  const namedHandler = () => {};
  const answerHandler = () => {};

  useEffect(() => {
    const fetchchara = async () => {
      const content = await fetch(
        "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/characters/img.json"
      )
        .then((response) => {
          if (!response.ok) {
            console.log(response);
          } else {
            console.log("ok");
            response.json();
          }
        })
        .catch((error) => {
          console.log("SHOfho");
        });
    };
    fetchchara();
  }, []);

  return (
    <div className="game">
      <Back />
      <div className="character">
        <div>What is this name?</div>
        {char}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDtPTyREmVTKa9RNtF-v7qKrLo3snUiK3pVFoVPRk7eVRCaq1epYuVwwkb7WeQWVgaO0&usqp=CAU"
          alt="g"
        /> */}
      </div>
      <div className="inputs">
        <form className="make-character" onSubmit={namedHandler}>
          <p>Please name character</p>
          <input />
          <input type="submit" />
        </form>
        <form className="answer-charcter" onSubmit={answerHandler}>
          <p>Please answer character name</p>
          <input />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Game1;
