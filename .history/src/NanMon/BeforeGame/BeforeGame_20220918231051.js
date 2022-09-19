import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>何人で遊ぶ？</h1>
        <button onClick={props.onClick}>2人</button>
        <button onClick={props.onClick2}>3人</button>
        <div className="rule">
          <h1>ルール</h1>
          <h2>1) 出てきたキャラクターに名前をつけてください</h2>
          <h2>2) そのキャラクターが再度出てきた時に名前を答えてください</h2>
          <h2>3) 相手より早く答えられた方がポイントをもらえます</h2>
          <h2>注) 答えるプレイヤー側のAnswerを押してから答えろ</h2>
        </div>
      </div>
    </div>
  );
};

export default BeforeGame;
