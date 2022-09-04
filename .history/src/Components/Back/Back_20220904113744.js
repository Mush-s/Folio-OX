import "./Back.css";

import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

const Back = () => {
  const histroy = useHistory();
  const backHandler = () => {};
  return (
    <div className="back">
      <button onClick={backHandler}>⇦</button>
    </div>
  );
};

export default Back;
