const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <button onClick={props.onClick}>ff</button>
      </div>
    </div>
  );
};

export default BeforeGame;
