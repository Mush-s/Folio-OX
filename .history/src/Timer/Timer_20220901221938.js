export const TImer = () => {
  const [time, setTime] = useState(5);

  const updataCount = () => {
    setInterval(() => {
      console.log("ti");
      setCount((preC) => preC - 1);
    }, 1000);
  };
};
