import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>Choose player</h1>
        <button onClick={props.onClick}>2</button>
        <button onClick={props.onClick2}>3</button>
      </div>
    </div>
  );
};

export default BeforeGame;
