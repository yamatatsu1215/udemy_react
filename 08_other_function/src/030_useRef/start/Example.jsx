import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputref = useRef()


  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputref} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  return (
    <div>
      <video>
        <source src="sample.mp4"></source>
      </video>
      <button onClick={() => {
        setPlaying(prev => !prev);
      }}>
        { playing ? 'Stop' : 'Play' }
      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2></Case2>
    </>
  );
};

export default Example;
