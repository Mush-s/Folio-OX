import "./App.css";
import Game from "./TicTacToe/Game/Game";
import Game1 from "./NanMon/Game/Game";
import Start from "./Start/Start";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/tictactou" element={<Game />} />
        <Route path="/nanmon" element={<Game1 />} />
      </Routes>
    </div>
  );
};

export default App;
