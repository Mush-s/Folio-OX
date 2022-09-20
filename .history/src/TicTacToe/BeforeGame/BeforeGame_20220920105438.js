import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>RULE</h1>
        <button onClick={props.onClick}></button>
      </div>
    </div>
  );
};

export default BeforeGame;
