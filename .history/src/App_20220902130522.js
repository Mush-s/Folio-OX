import "./App.css";
import Game from "./Game/Game/Game";
import Start from "./Start/Start";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Route path="/start">
        <Start />
      </Route>
      <Game />
    </div>
  );
};

export default App;
