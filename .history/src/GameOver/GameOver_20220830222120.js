import Back from "./Back";
import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="gameover">
      <button onClick={props.onClick}>Reset</button>
      <Back />
    </div>
  );
};

export default GameOver;
