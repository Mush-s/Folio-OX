import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <nav className="header">
        <div className="header-logo">GAME</div>
        <ul className="header-list">
          <li>
            <a href='https://webtan.tech/space-between-lastline/#index_id0'>🦊</a>
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
