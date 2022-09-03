import ReactDOM from "react-dom";

const OverLay = () => {
  return ReactDOM.createPortal(
    <h1>Hello Portals</h1>,
    document.getElementById("portal")
  );
};

export default OverLay;
