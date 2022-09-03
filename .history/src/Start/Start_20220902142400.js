import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="start-button">
        <Link to="game">Start Game</Link>
      </div>
    </div>
  );
};

export default Start;
