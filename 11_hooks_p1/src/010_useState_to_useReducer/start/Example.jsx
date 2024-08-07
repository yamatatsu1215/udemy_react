import { useReducer, useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rsate, dispatch] = useReducer((prev) => ++prev,0);

  const countup = () => {
    setState((prev) => ++prev);
  };

  const rcountup = () => {
    dispatch();
  }
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countup}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountup}>+</button>
      </div>
    </>
  );
};

export default Example;
