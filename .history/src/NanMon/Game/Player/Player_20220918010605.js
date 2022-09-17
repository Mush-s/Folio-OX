const Player = (props) => {
  return (
    <div
      className={
        (props.player && props.number === 1 && "player1") ||
        (props.player && props.number === 2 && "player2")
      }
    >
      <div>player{props.number}</div>
      <div> have {props.Point} point</div>
      <button onClick={props.Answer}>Answer</button>
    </div>
  );
};

export default Player;
