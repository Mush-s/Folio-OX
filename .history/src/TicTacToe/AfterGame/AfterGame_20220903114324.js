import "./AfterGame.css";



const AfterGame = (props) => {
  return (
    <div className="after">
      <div className="content">
        <button onClick={props.game}>Game</button>
        <button>Home</button>
      </div>
    </div>
  );
};

export default AfterGame;
