import "./Back.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <button className="back" onClick={backHandler}>
      ⇦
    </button>
  );
};

export default Back;
