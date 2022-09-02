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
      props.setResult("hi");
    }
  };

  useEffect(() => {
    updataCount();
    return () => clearInterval(timer);
  }, [time]);

  return <div>count is: {time}</div>;
};
