import { useEffect } from "react";

const Character = (props) => {
  useEffect(() => {
    let get = props.char[Math.floor(Math.random() * props.char.length)];
  }),
    [];
  return (
    <div className="character">
      <div>What is this name?</div>
      <img src={get.img} />
    </div>
  );
};

export default Character;
