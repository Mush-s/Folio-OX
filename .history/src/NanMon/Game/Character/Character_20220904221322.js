const Character = (props) => {
  let get = props.char.img[Math.floor(Math.random() * props.char.length)];
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
        <div>{get}</div>

    </div>
  );
};

export default Character;
