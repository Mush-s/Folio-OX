const Cell = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

export default Cell;
