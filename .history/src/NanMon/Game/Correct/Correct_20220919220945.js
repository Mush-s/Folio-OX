import "./Correct.css";

const Correct = (props) => {
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 5000);
  }

  return (
    <h1 className="title -visible">
      <span>T</span>
      <span>E</span>
      <span>X</span>
      <span>T</span>
      <span>&nbsp;</span>
      <span>A</span>
      <span>N</span>
      <span>I</span>
      <span>M</span>
      <span>A</span>
      <span>T</span>
      <span>I</span>
      <span>O</span>
      <span>N</span>
    </h1>
  );
};

export default Correct;
