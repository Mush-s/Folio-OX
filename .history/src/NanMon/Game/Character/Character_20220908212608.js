import "./Character.css";
import { useState, useEffect } from "react";

const Character = (props) => {
  const [random, setRandom] = useState(props.char);
  const [charName, setCharName] = useState("");
  const [char, setChar] = useState({
    id: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2VfwYNAH3zcUqi46YyKcMkCmYShfJDi94A&usqp=CAU",
    name: "",
  });

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
      console.log("kokok");
    };
    fetchchara();
  }, [random]);

  const changeHandler = (e) => {
    e.preventDefault();
    setCharName(e.target.value);
  };

  const answerHandler = () => {};

  const deleteHandler = () => {
    fetch(
      `https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Character/${random.id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: random.img, name: "" }),
      }
    ).then((response) => {
      if (!response.ok) {
        console.log("Update error!");
        throw new Error("error");
      }
      console.log("Update ok!");
      return response.json();
    });
    setRandom(char[Math.floor(Math.random() * char.length)]);
  };

  const reloadHandler = (e) => {
    e.preventDefault();
    setRandom(char[Math.floor(Math.random() * char.length)]);
    // window.location.reload();
  };

  const namedHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Character/${random.id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: random.img, name: charName }),
      }
    ).then((response) => {
      if (!response.ok) {
        console.log("Update error!");
        throw new Error("error");
      }
      console.log("Update ok!");
      return response.json();
    });
    setCharName("");
  };
  return (
    <>
      <div className="character">
        <div>What is this name?</div>
        <div>{random.name}</div>
        <img src={random.img} alt="" />
      </div>
      <div className="inputs">
        <form className="make-character" onSubmit={namedHandler}>
          <p>Please name character</p>
          <input value={charName} onChange={changeHandler} />
          <input type="submit" />
        </form>
        <button onClick={reloadHandler}>NEXT</button>
        <form className="answer-charcter" onSubmit={answerHandler}>
          <p>Please answer name</p>
          <input />
          <input type="submit" />
        </form>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </>
  );
};

export default Character;