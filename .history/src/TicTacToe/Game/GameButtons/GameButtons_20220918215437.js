import "./GameButtons.css";

const GameOver = (props) => {
  return (
    <div className="gameover">
      <button onClick={props.onClick}>Reset</button>
      {close && <button onClick={props.onChange}>{props.mode}</button>}
    </div>
  );
};

export default GameOver;
