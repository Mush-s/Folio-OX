import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>Choose player</h1>
        <button onClick={props.onClick}>2</button>
        <button onClick={props.onClick2}>3</button>
        <div className="rule">
          <h1>1) 出てきたキャラクターに名前をつけてください</h1>
          <h1>2) そのキャラクターが再度出てきた時に名前を答えてください</h1>
        </div>
      </div>
    </div>
  );
};

export default BeforeGame;
