import Profile from "./components/Profile";


const person = [
  {
    name: "Geo",
    age: "18",
    hobby: ["sports", ]
  }

];
const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
      <ul>
        {/* ここに記述 */}
        <Profile />
      </ul>
    </>
  );
};

export default Example;
