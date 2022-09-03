import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <div>Game</div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className="start-button">
        <ul>
          <li>
            <Link to="game">Tic Tac Toe</Link>
          </li>
          <li>
            <a>Under Development</a>
          </li>
          <li>
            <a>Under Development</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
