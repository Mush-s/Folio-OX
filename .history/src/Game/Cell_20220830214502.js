import "./Cell.css";

const Cell = (props) => {
  return (
    <button className="cell flat border" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Cell;
