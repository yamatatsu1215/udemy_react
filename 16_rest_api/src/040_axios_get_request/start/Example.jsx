import { useEffect } from "react";
import axios from 'axios';
const Example = () => {
  useEffect(async() => {
    const res = await axios.get('http://localhost:3003/user')
      console.log(res.data)
    });
  
  return <></>;
};

export default Example;
