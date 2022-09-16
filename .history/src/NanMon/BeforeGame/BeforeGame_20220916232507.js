import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <h1>Choose player</h1>
      <button onClick={props.onClick}>start</button>
    </div>
  );
};

export default BeforeGame;
