const Player = (props) => {
  return (
    <div
      className={
        (props.number === props.player && `player${props.number}`, "player")
      }
    >
      <div>player{props.number}</div>
      <div> have {props.Point} point</div>
      <button onClick={props.Answer}>Answer</button>
    </div>
  );
};

export default Player;
