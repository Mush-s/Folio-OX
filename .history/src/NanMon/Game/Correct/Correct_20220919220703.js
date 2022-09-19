import "./Correct.css";

const Correct = (props) => {
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 5000);
  }

  let a = <span>s</span> && <span>f</span>;
  return <h1 className={props.correct ? "title -visible" : ""}>{a}</h1>;
};

export default Correct;
