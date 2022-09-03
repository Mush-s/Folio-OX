import "./AfterGame.css";

import { Link } from "react-router-dom";
const AfterGame = (props) => {
  return (
    <div className="after">
      <div className="content">
        <div className="result">{props.result}</div>
        <button onClick={props.onClick}>Game</button>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default AfterGame;
