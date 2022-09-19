import { Transition } from "react-transition-group";
import { useState } from "react";
import "./Correct.css";

const Correct = (props) => {
  const [inProps, setInProps] = useState(false);

  const transitonStyles = {
    entering: { opacity: 1, color: "red", transiton: "all 1s ease" },
  };

  const bi = () => {
    setInProps(true);
  };
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 3000);
  }

  return (
    <>
      <Transition in={inProps} timeout={1500}>
        {(state) => {
          <div style={transitonStyles[state]}>
            <p>React CSS Animation</p>
          </div>;
        }}
      </Transition>
      <button onClcik={bi}>f</button>
    </>
  );
};

export default Correct;
