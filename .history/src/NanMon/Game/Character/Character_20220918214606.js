import "./Character.css";
import { useState, useEffect } from "react";
import Player from "../Player/Player";
import AfterGame1 from "../../AfterGame/AfterGame1";

const Character = () => {
  const [charName, setCharName] = useState("");
  const [answer, setAnswer] = useState("");
  const [start, setStart] = useState(false);
  const [player, setPlayer] = useState(0);
  const [player1Point, setPlayer1Point] = useState(0);
  const [player2Point, setPlayer2Point] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [char, setChar] = useState({
    id: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2VfwYNAH3zcUqi46YyKcMkCmYShfJDi94A&usqp=CAU",
    name: "",
  });
  const [random, setRandom] = useState(char);

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

  useEffect(() => {
    if (player1Point === 1) {
      setGameover(true);
    }
    if (player2Point === 1) {
      setGameover(true);
    }
  }, [player1Point, player2Point]);

  useEffect(() => {
    fetchchara();
  }, [random, charName]);

  // 名前変える
  const changeHandler = (e) => {
    setCharName(e.target.value);
  };

  // 名前の初期化
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

  //次の画像へ
  const nextHandler = (e) => {
    e.preventDefault();
    setRandom(char[Math.floor(Math.random() * char.length)]);
    setStart(true);
  };

  const resetHandler = () => {
    setGameover(false);
    setPlayer1Point(0);
    setPlayer2Point(0);
    setPlayer(0);
  };
  //名前をつける
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
    console.log(charName);
    setCharName("");
    fetchchara();
  };

  const answerChange = (e) => {
    setAnswer(e.target.value);
  };

  const answerHandler = (e) => {
    e.preventDefault();
    if (answer === random.name) {
      if (player === 1) {
        setPlayer1Point((preState) => preState + 1);
      }
      if (player === 2) {
        setPlayer2Point((preState) => preState + 1);
      }
    } else {
      if (player === 1) {
        setPlayer1Point((preState) => preState - 1);
      }
      if (player === 2) {
        setPlayer2Point((preState) => preState - 1);
      }
    }
    setAnswer("");
  };

  const changeToPlayer1 = () => {
    setPlayer(1);
  };

  const changeToPlayer2 = () => {
    setPlayer(2);
  };

  return (
    <>
      <div className="character">
        {start && <button onClick={deleteHandler}>DELETE</button>}
        <div>2PLAYER</div>
        <img src={random.img} alt="" />
      </div>
      {start && (
        <div className="players">
          <Player
            Point={player1Point}
            Answer={changeToPlayer1}
            number={1}
            player={player}
          />
          <div className="vs">VS</div>
          <Player
            Point={player2Point}
            Answer={changeToPlayer2}
            number={2}
            player={player}
          />
        </div>
      )}
      <div className="inputs">
        {start && (
          <form className="make-character" onSubmit={namedHandler}>
            <p>Please name character</p>
            <input value={charName} onChange={changeHandler} />
            <input type="submit" />
          </form>
        )}
        <button onClick={nextHandler}>{!start ? "START" : "NEXT"}</button>
        {start && (
          <form className="answer-charcter" onSubmit={answerHandler}>
            <p>Please answer name</p>
            <input value={answer} onChange={answerChange} />
            <input type="submit" />
          </form>
        )}
        {/* {start && <button onClick={deleteHandler}>DELETE</button>} */}
      </div>

      {gameover && <AfterGame1 player={player} onClick={resetHandler} />}
    </>
  );
};

export default Character;
