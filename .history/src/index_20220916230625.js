import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import AfterGame from "./TicTacToe/AfterGame/AfterGame";

import App from "./App";
import BeforeGame from "./NanMon/BeforeGame/BeforeGame";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export const OverLay = (props) => {
  return ReactDOM.createPortal(
    <AfterGame onClick={props.onClick} result={props.result} />,
    document.getElementById("portal")
  );
};
export const HowMany = (props) => {
  return ReactDOM.createPortal(
    <BeforeGame />,
    document.getElementById("howmany")
  );
};
