import "./Back.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/Game");
  };
  return (
    <button className="back" onClick={backHandler}>
      ⇦
    </button>
  );
};

export default Back;
