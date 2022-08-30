import classes from "./Cell.css";

const Cell = (props) => {
  return (
    <button className='cell' onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Cell;
