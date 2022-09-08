const Character = (props) => {
  let get = props.char[Math.floor(Math.random() * props.char.length)];

  return (
    <div className="character">
      <div>What is this name?</div>
      <img src={get.img} alt="" />
      <button>next</button>
    </div>
  );
};

export default Character;
