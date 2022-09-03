import "./AfterGame.css";
import { Link } from "react-router-dom";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const AfterGame = (props) => {
  return (
    <div className="after">
      <div className="content">
        <button onClick={props.game}>Game</button>
        <button>Home</button>
      </div>
    </div>
  );
};

export default AfterGame;
