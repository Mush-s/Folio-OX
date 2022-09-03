import "./AfterGame.css";

import { Link } from "react-router-dom";
const AfterGame = (props) => {
  return (
    <div className="after">
      <ul className="content">
        <li>
          <div className="result">{props.result}</div>
        </li>
        <li>
          <button onClick={props.onClick}>Game</button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default AfterGame;
