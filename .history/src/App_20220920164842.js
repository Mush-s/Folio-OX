import "./App.css";
import Game from "./TicTacToe/Game/Game";
import Game1 from "./NanMon/Game/Game1";
import Start from "./Start/Start";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/tictactou" element={<Game />} />
        <Route path="/nanmon" element={<Game1 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
