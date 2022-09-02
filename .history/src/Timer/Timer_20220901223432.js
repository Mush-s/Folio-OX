import { useEffect, useState } from "react";

export const Timer = (props) => {
  const [time, setTime] = useState(5);
  let timer;
  const updataCount = () => {
    timer = setInterval(() => {
      console.log(time);
      setTime((preC) => preC - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
      if (props.player === "O") {
        props.setResult("X is Winner");
      }
      if (props.player === "X") {
        props.setResult("0 is Winner");
      }
    }
  };

  useEffect(() => {
    updataCount();
    return () => clearInterval(timer);
  }, [time]);

  return <div>count is: {time}</div>;
};
