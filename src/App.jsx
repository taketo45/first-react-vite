import { useState } from 'react'
import './App.css'
import Icon from '/2.jpeg'
import Test from './Test'
import Button from './components/Button';

function App() {
  const [flag, setFlag] = useState(false);

  const test = () => {
    setFlag(!flag);
  };

  const [aa, setAa] = useState("押される前");

  const handleClick = () => {
    setAa("ボタン押された！");
  }

  return (
    <>
      <h1>Vite + React</h1>
      <p className="read-the-docs">リアクトの授業を受けています。</p>

      <h2 onClick={handleClick}>{aa}</h2>

      <Button text="送信" />
      <Button text="登録" />

      <Test aaa="きんぱつかのみ" bb="原宿スタッフ"/>

      <img src={Icon} alt="icon" onClick={test}/>
      {flag && <p>クリックされました</p>}

    </>
  )
}

export default App
