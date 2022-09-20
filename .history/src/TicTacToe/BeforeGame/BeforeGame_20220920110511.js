import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>RULE</h1>
        <h2>１手５秒</h2>
        <h2>相手のマスを一度だけ塗り替えることができます</h2>
        <h2>その点以外はシンプルなOXゲームです</h2>

        <p></p>
        <button onClick={props.onClick}>始める</button>
      </div>
    </div>
  );
};

export default BeforeGame;
