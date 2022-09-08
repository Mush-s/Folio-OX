const Character = (props) => {
  let get = props.char[Math.floor(Math.random() * props.char.length)];

  const changeHandler = (e) => {
    e.preventDefault();
    setCharName(e.target.value);
  };
  
  const namedHandler = () => {
    fetch(
      "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Characters/chara1.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: charName }),
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
        <img src={get.img} alt="" />
      </div>
      <div className="inputs">
        <form className="make-character" onSubmit={namedHandler}>
          <p>Please name character</p>
          <input type="text" value={charName} onChange={changeHandler} />
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
