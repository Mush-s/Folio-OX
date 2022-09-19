import "./Correct.css";

const Correct = (props) => {
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 3000);
  }

  return (
    <div>
      <h1 className="">CORRECT ANSWER</h1>
    </div>
  );
};

export default Correct;
