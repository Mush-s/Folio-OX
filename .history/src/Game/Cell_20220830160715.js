import classes from "./Cell.css";

const Cell = (props) => {
  return (
    <button className={classes.cell} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Cell;
