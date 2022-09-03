import "./AfterGame.css";
import { Link } from "react-router-dom";

const AfterGame = () => {
  return (
    <div className="after">
      <div className="content">
          <Link to="/game">Game</Link>
          <Link to="/start">Home</Link>
      </div>
    </div>
  );
};

export default AfterGame;
