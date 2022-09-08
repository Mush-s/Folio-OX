const Character = (props) => {
  let get = props.char[Math.floor(Math.random() * props.char.length)];
  console.log(get)
  return (
    <div className="character">
      <div>What is this name?</div>
      {/* <ul>
        {props.char.map((c) => (
          <li key={c.id}>
            <img src={c.img} alt="hi" />
          </li>
        ))}
      </ul> */}
      {/* <div>{get.img}</div> */}
    </div>
  );
};

export default Character;
