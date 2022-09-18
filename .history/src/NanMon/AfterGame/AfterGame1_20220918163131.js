import { Link } from "react-router-dom";
const AfterGame1 = (props) => {
  return (
    <div className="after">
      <div className="content">
        <div>Winner is {props.player}</div>
        <button>
          <Link to="/nanmon">Game</Link>
        </button>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default AfterGame1;
