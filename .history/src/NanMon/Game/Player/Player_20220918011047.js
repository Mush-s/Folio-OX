const Player = (props) => {
  console.log(props.player);
  console.log(props.number);
  return (
    <div
      className={
        (props.player === 1 && props.number === 1 ? "player1" : "") ||
        (props.player === 2 && props.number === 2 ? "player2" : "")
      }
    >
      <div>player{props.number}</div>
      <div> have {props.Point} point</div>
      <button onClick={props.Answer}>Answer</button>
    </div>
  );
};

export default Player;
