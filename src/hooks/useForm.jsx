//カスタムフックはuseXXXという名前で作成する
import { useState, useEffect } from 'react';

export const useForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  // API通信したデータを格納するためのステート
  const [data, setData] = useState([]);

  const handleNameChange = (e) => {
    
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    
    setEmail(e.target.value);
  }

  console.log("1レンダリングされました");
  
  useEffect(()=>{
    console.log("感動した！");

    // API通信を行う
    const fetchData = async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        // console.log(response, "response");

        const data = await response.json();  //かならJSONデータではjson()を使う。絶対つかわないといけない

        setData(data);

        console.log(data, "data");

      } catch (error){
        console.error("エラーが発生しました！", error);
      }
    };

    //ここで実行する
    fetchData();

  },[]);
  
  console.log("2レンダリングされました");

  return {
    name,
    email,
    data,
    handleNameChange,
    handleEmailChange,
  };

};