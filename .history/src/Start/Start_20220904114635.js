import { Link } from "react-router-dom";

import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <nav className="header">
        <div className="header-logo">GAME</div>
        <ul className="header-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">fobnvnl</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="start-button">
        <ul>
          <li>
            <Link to="game">
              <img
                src="https://dictionary.cambridge.org/ja/images/thumb/nought_noun_002_25125.jpg?version=5.0.250"
                alt="hi"
              />
              | Tic Tac Toe
            </Link>
          </li>
          <li>
            <a href="#">Under Development</a>
          </li>
          <li>
            <a href="#">Under Development</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
