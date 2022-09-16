const BeforeGame = (props) => {
  return (
    <div>
      <h1>How many people do you wanna play with?</h1>
      <button onClick={props.onClick}>start</button>
    </div>
  );
};

export default BeforeGame;
