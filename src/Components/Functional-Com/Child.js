function Child(props) {
  console.log(props)

  var y = 200

  return (
    <div>
      <h2>Functional Child : {props.x} {y}</h2>
      <h2>Functional Child : {props.name}</h2>
    </div>
  );
}

export default Child;
