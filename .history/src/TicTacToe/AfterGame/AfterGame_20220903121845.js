import "./AfterGame.css";

import { Link } from "react-router-dom";
const AfterGame = (props) => {
  return (
    <div className="after">
      <div className="content">
        <button onClick={props.onClick}>
          <Link to="/game">Game</Link>
        </button>
        <button>
          <Link to="/">Ho,me</Link>
        </button>
      </div>
    </div>
  );
};

export default AfterGame;
