import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactDOM } from "react";

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
    <h1>Hello Portals</h1>,
    document.getElementById("portal")
  );
};
