import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="start-button">
        <ul>
          <li>
            <Link to="game">Tic Tac Toe</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
