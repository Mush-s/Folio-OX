import classes from "./Cell.classes.css";

const Cell = (props) => {
  return (
    <button className={classes.cell} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Cell;
