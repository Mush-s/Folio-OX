import { Link } from "react-router-dom";
import Header from "./header/Header";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <Header />
      <div className="start-button">
        <ul>
          <li>
            <img
              src="https://dictionary.cambridge.org/ja/images/thumb/nought_noun_002_25125.jpg?version=5.0.250"
              alt="hi"
            />
            <Link to="game">| Tic Tac Toe</Link>
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
