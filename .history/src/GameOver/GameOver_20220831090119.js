import Back from "./Back";
import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="gameover">
      <button onClick={props.onClick}>Reset</button>
      <button>Back</button>
    </div>
  );
};

export default GameOver;
