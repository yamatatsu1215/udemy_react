import { useState } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  const [,setState] = useContext(MyContext)

  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      <h3>{value}</h3>
    </div>
  );
};

export default OtherChild;
