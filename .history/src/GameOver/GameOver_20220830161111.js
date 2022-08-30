import './GameOver.css'

const GameOver = (props) => {
  return (
    <div className='gameover'>
      <button onClick={props.onClick}>hi</button>
    </div>
  );
};

export default GameOver;
