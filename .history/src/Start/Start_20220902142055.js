import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <Link to="game">Start Game</Link>
    </div>
  );
};

export default Start;
