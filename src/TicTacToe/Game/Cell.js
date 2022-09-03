import "./Cell.css";

const Cell = (props) => {
  return (
    <div className="cell flat border">
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  );
};

export default Cell;
