import "./Back.css";
import { useHistory } from "react-router-dom";

const Back = () => {
  const history = useHistory();
  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="back">
      <button onClick={backHandler}>⇦</button>
    </div>
  );
};

export default Back;
