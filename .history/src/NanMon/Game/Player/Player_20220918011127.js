const Player = (props) => {
  console.log(props.player);
  console.log(props.number);
  return (
    <div
      className={
        (props.player === 1 && props.number === 1 ? "player1" : "") ||
        (props.player === 2 && props.number === 2 ? "player2" : "")(
          props.player === 3 && props.number === 3 ? "player3" : ""
        )(props.player === 4 && props.number === 4 ? "player4" : "")(
          props.player === 5 && props.number === 5 ? "player5" : ""
        )(props.player === 6 && props.number === 6 ? "player6" : "")
      }
    >
      <div>player{props.number}</div>
      <div> have {props.Point} point</div>
      <button onClick={props.Answer}>Answer</button>
    </div>
  );
};

export default Player;
