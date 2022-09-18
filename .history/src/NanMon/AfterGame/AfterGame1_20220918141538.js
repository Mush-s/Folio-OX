import { Link } from "react-router-dom";
const AfterGame1 = (props) => {
  return (
    <div className="after">
      <div className="content">
        {/* <div className="result">{props.result}</div>
        <button onClick={props.onClick}> */}
        <Link to="/nanmon">Game</Link>
        {/* </button> */}
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default AfterGame1;
