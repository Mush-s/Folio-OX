import "./App.css";
import Game from "./TicTacToe/Game/Game";
import Game from "./NanMon/Game/Game";
import Start from "./Start/Start";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/tictactou" element={<Game />} />
        <Route path="/nanmon" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
