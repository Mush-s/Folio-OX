import "./AfterGame.css";

import { Link } from "react-router-dom";
const AfterGame = (props) => {
  return (
    <div className="after">
      <div className="content">
        <div className="result">{props.result}</div>
        <button onClick={props.onClick}>
          <Link to="/Games/tictactou">Game</Link>
        </button>
        <button>
          <Link to="/Games">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default AfterGame;
