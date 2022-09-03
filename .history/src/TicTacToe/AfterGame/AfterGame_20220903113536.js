import "./AfterGame.css";
import { Link } from "react-router-dom";

const AfterGame = () => {
  return (
    <div className="after">
      <div className="content">
          <Link to="/game" className="content-link">Game</Link>
          <Link to="/start"className="content-link">Home</Link>
      </div>
    </div>
  );
};

export default AfterGame;
