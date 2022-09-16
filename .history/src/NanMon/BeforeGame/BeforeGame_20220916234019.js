import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>Choose player</h1>
        <button onClick={props.onClick}>1</button>
        <button onClick2={props.onClick2}>2</button>
      </div>
    </div>
  );
};

export default BeforeGame;
