const Player = (props) => {
  return (
    <div className={`player`}>
      <div>player{props.player}</div>
      <div> have {props.Point} point</div>
      <button onClick={props.Answer}>Answer</button>
    </div>
  );
};

export default Player;
