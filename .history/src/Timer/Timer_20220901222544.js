import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(5);
let timer
  const updataCount = () => {
    timer = !timer setInterval(() => {
      console.log("ti");
      setTime((preC) => preC - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(updataCount);
      console.log('ff')
    }
  };

  useEffect(() => {
    updataCount();
    return () => clearInterval(updataCount);
  }, [time]);
};
