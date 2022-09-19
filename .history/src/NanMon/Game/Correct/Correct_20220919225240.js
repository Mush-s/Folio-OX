import "./Correct.css";

const Correct = (props) => {
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 3000);
  }

  return (
    <div className="correct">
      <h1 className="content">CORRECT ANSWER</h1>
    </div>
  );
};

export default Correct;
