import { Link } from "react-router-dom";
import "./AfterGame1.css";

const AfterGame1 = (props) => {
  return (
    <div className="after">
      <div className="content">
        <h1>Winner is {props.player} player</h1>
        <button onClick={props.onClick}>
          <Link to="/Games/nanmon">Game</Link>
        </button>
        <button>
          <Link to="/Games">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default AfterGame1;
