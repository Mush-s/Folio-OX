import { Link } from "react-router-dom";
const AfterGame1 = (props) => {
  return (
    <div className="after">
      <div className="content">
        <h1>Winner is {props.player} player</h1>
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
