import "./Correct.css";

const Correct = (props) => {
  let a;
  if (props.correct) {
    a = "title -visible";
    setTimeout(() => {
      props.setCorrect(false);
      a.remove(" -visible");
    }, 3000);
  }

  return (
    <h1 className={a}>
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
