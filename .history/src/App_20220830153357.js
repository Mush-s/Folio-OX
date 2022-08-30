import classes from "./App.css";
import Game from "./Game/Game";


const App = () => {
  return (
    <div className={classes.app}>
      <Game />
    </div>
  );
};

export default App;
