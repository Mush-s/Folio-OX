import "./Game1.css";

const Game1 = () => {
  return (
    <div className="game">
      <div className="character">
        <div>What is this name?</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDtPTyREmVTKa9RNtF-v7qKrLo3snUiK3pVFoVPRk7eVRCaq1epYuVwwkb7WeQWVgaO0&usqp=CAU"
          alt="g"
        />
      </div>
      <form className="name-character">
        <input />
        <input type="submit" />
      </form>
      <form>
        <input />
        <input />
      </form>
    </div>
  );
};
export default Game1;
