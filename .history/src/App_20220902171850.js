import "./App.css";
import Game from "./TicTacToe/Game/Game";
import Start from "./Start/Start";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Start />} exact/>
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
