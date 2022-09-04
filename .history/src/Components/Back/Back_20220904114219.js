import "./Back.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const history = useNavigate();
  const backHandler = () => {
    history("/");
  };
  return (
    <div className="back">
      <button onClick={backHandler}>⇦</button>
    </div>
  );
};

export default Back;
