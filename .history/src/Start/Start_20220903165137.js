import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="start-button">
        <div>Game</div>
        <ul>
          <li>
            <Link to="game">Tic Tac Toe</Link>
          </li>
          <li>
            <a>gagegeg</a>
          </li>
          <li>
            <a>fjeovoenvo</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
