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
            <a>Under The Developing</a>
          </li>
          <li>
            <a>Under The Developing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
