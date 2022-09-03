import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <div>Game</div>
      <nav className="header">
        <ul className="header-list">
          <li>
            <a>🦊</a>
          </li>
          <li>
            <a>🐣</a>
          </li>
          <li>
            <a>🐠</a>
          </li>
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
