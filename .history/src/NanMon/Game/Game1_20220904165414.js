import { useEffect } from "react";
import Back from "../../Components/Back/Back";
import "./Game1.css";

const Game1 = () => {
  const namedHandler = () => {};
  const answerHandler = () => {};

  useEffect(() => {
    const fetchchara = async () => {
      //   await fetch(
      //     "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon.json"
      //   )
      //     .then((response) => {
      //       if (!response.ok) {
      //         console.log(response);
      //       } else {
      //         console.log("ok");
      //         response.json();
      //       }
      //     })
      //     .catch((error) => {
      //       console.log("SHOfho");
      //     });
      // };
      // fetchchara();
      const token = "your-t0ken_xyz";

      const response = await fetch(
        "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon.json",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
    };
    fetchchara();
  }, []);

  return (
    <div className="game">
      <Back />
      <div className="character">
        <div>What is this name?</div>

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
