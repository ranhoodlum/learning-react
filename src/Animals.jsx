function ListItem(props) {
  const animal = props.animal;
  return <li key={animal}> {animal} </li>;
}

function List(props) {
  return (
    <>
      {!props.animals ? (
        <div> Loading... </div>
      ) : props.animals.length === 0 ? (
        <div> There are no animals in the list </div>
      ) : (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}

      {props.animals &&
        props.animals.length === 0 && (
          <div>There are no animals in the list!</div>
        ) && (
          <ul>
            {props.animals.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        )}
    </>
  );
}

export default function Animals() {
  const animals = ["Lion", "Cow", "Tiger", "Lizard"];
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
