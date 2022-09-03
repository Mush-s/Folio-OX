import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import AfterGame from "./TicTacToe/AfterGame/AfterGame";

import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export const OverLay = (props) => {
  return ReactDOM.createPortal(
    <AfterGame
      onClick={props.onClick}
      result={props.result}
      cells={props.cells}
    />,
    document.getElementById("portal")
  );
};
