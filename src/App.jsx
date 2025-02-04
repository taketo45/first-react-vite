
import './App.css'
import { useForm } from './hooks/useForm'


function App() {

  //切り出したカスタムフックを呼び出す
  const {
    name,
    email,
    data,
    handleNameChange,
    handleEmailChange,
  } = useForm();

  // console.log(data, "useStateで取得したデータ");
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <p>{index}</p>
          <p>{item.title}</p>
          <p>{item.id}</p>
          <p>{item.userId}</p>
        </div>
      ))}

      <p>入力した名前：{name}</p>
      <p>入力したメールアドレス：{email}</p>
      <div>
        <p>名前が入ります</p>
        <input 
          type="text"
          placeholder="名前を入力"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div>
        <p>メールアドレスがはいります</p>
        <input 
          type="text"
          placeholder="メールアドレスを入力"
          onChange={handleEmailChange}
          value={email}
        />
      </div>
    </>
  )
}

export default App
