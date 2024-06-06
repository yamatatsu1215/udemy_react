
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animallist = [];
  for(const animal of animals) {

  }
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li>
      </ul>
    </>
  );
};

export default Example;
