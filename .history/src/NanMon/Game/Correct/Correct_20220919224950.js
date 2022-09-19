import "./Correct.css";

const Correct = (props) => {
    if (props.correct) {
      setTimeout(() => {
        props.setCorrect(false);
      }, 3000);
    }

  return <h1>CORRECT ANSWER</h1>;
};

export default Correct;
