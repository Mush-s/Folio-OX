import "./Character.css";
import { useState } from "react";

const Character = (props) => {
  const [random, setRandom] = useState(props.char[1]);

  const changeHandler = (e) => {
    e.preventDefault();
    props.setCharName(e.target.value);
  };

  const answerHandler = () => {};

  const reloadHandler = (e) => {
    e.preventDefault();
    setRandom(props.char[Math.floor(Math.random() * props.char.length)]);
    window.location.reload();
  };

  const namedHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Character/${get.id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: get.img, name: props.charName }),
      }
    ).then((response) => {
      if (!response.ok) {
        console.log("Update error!");
        throw new Error("error");
      }
      console.log("Update ok!");
      return response.json();
    });
  };
  return (
    <>
      <div className="character">
        <div>What is this name?</div>
        <div>{get.name}</div>
        <img src={get.img} alt="" />
      </div>
      <div className="inputs">
        <form className="make-character" onSubmit={namedHandler}>
          <p>Please name character</p>
          <input value={props.charName} onChange={changeHandler} />
          <input type="submit" />
        </form>
        <button onClick={reloadHandler}>NEXT</button>
        <form className="answer-charcter" onSubmit={answerHandler}>
          <p>Please answer name</p>
          <input />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Character;
