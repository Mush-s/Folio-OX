import "./Back.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate.goBack();
  };
  return (
    <div className="back">
      <button onClick={backHandler}>⇦</button>
    </div>
  );
};

export default Back;
