import { Transition } from "react-transition-group";
import "./Correct.css";

const Correct = (props) => {
  let a;
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 3000);
  }

  return <Transition />;
};

export default Correct;
