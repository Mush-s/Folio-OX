const Player = (props) => {
  <div className={`player${props.player}`}>
    <div>player1</div>
    <div> have {props.Point} point</div>
    <button onClick={props.Answer}>Answer</button>
  </div>;
};

export default Player;
