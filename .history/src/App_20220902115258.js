import "./App.css";
import Game from "./Game/Game/Game";
import Start from "./Start/Start";

const App = () => {
  return (
    <div className="app">
      <Start />
      <Game />
    </div>
  );
};

export default App;
