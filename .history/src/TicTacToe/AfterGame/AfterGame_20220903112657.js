import "./AfterGame.css";
import { Link } from "react-router-dom";

const AfterGame = () => {
  return (
    <div className="after">
      <div className="content">
        <div className="btn">
          <Link to="/game">One More Game</Link>
          <Link to="/start">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AfterGame;
