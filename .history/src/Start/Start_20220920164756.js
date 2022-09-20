import { Link } from "react-router-dom";

import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <nav className="header">
        <div className="header-logo">PORTFOLIO</div>
        <ul className="header-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">setting</a>
          </li>
          <li>
            <Link to ='profile'>Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="start-button">
        <ul>
          <li>
            <Link to="/tictactou">
              <img
                src="https://dictionary.cambridge.org/ja/images/thumb/nought_noun_002_25125.jpg?version=5.0.250"
                alt="tic tac tou"
              />
              | Tic Tac Toe
            </Link>
          </li>
          <li>
            <Link to="nanmon">
              <img
                src="https://sugorokuya.jp/assets/products/nanjamonja/nanjamonja_wt-card-matrix-w800-714bce2ee63a030a02946d11ed11b930055551c61b2eaa47287edc89866c5f83.jpg"
                alt="hi"
              />
              | NanMon
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
