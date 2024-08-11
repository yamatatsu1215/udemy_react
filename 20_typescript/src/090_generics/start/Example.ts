const Example = () => {
  // 練習用
  const repeatstr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  
  const repeatnum = (value: number, times: number): string[] => {
    return new Array(times).fill(value);
  }
  
  const repeat = <T>(value: T, times: number): string[] => {
    return new Array(times).fill(value);
  }

  // const strArry = repeatstr('hello',3);
  const numArry = repeat<number>(10,3);
  console.log(numArry);
};

export default Example;
