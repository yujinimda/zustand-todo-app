import './App.css'
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  //입력값이 변경될때마다 실행
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log("입력값:" + e.target.value);
  }

  return (
    <>
    <div className='max-w-md mx-auto p-4'>
      <h1>투두리스트</h1>
      {/* 입력폼 */}
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className=''
          placeholder='할 일을 입력해주세요!'  
        />
      </div>
      {/* 리스트 */}
      <div></div>
    </div>
    </>
  )
}

export default App
