import { createContext } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext("hello");

const Example = () => {
  return (
    <MyContext.Provider value={value}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
