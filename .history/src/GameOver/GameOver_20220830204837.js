import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="gameover">
      <button onClick={props.onClick}>Reset</button>
    </div>
  );
};

export default GameOver;
