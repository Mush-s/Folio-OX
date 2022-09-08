const Character = (props) => {
  let get = props.char[Math.floor(Math.random() * props.char.length)];
  console.log(get.img);
  return (
    <div className="character">
      <div>What is this name?</div>
      <img src={get.img} alt="char" />
    </div>
  );
};

export default Character;
