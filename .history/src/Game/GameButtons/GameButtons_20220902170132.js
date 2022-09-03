import "./GameButtons.css";

const GameOver = (props) => {
  return (
    <div className="gameover">
      <button onClick={props.onClick}>Reset</button>
      <button onClick={props.onBack}>Back</button>
      <button className="changeMode" onClick={props.onChange}>
        {props.mode}
      </button>
    </div>
  );
};

export default GameOver;
