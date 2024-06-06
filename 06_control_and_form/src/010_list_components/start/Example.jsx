
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animallist = [];
  for(const animal of animals) {
    animallist.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animallist}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
