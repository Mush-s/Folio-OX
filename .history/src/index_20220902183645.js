import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactDOM } from "react";
import AfterGame from "./TicTacToe/AfterGame/AfterGame";

import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export const OverLay = () => {
  return ReactDOM.createPortal(
    <AfterGame />,
    document.getElementById("portal")
  );
};
