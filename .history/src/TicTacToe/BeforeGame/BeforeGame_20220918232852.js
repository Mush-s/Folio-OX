const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <button onClick={props.onClick}></button>
      </div>
    </div>
  );
};

export default BeforeGame;
