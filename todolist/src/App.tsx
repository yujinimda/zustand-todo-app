import './App.css'
import Todoitem from './components/TodoItem';
import { useTodoStore } from './store/todoStore';
import { useState } from "react";

function App() {
  const {todos, addTodo, allDeleteTodo, importantTodo} = useTodoStore();
  const [text, setText] = useState("");
  const [prevTodos, setPrevTodos ] = useState[todoes]
  const [isFiltered, setIsFiltered] = useState(false);



  //입력값이 변경될때마다 실행
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    //console.log("입력값:" + e.target.value);
  }

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text); //할 일 추가
      setText("");
    }
    //console.log(todos)
  }

  const prevToggleFilter = () => {

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
        <button onClick={handleAdd}>
          추가
        </button>
        <button onClick={allDeleteTodo}>
        전체삭제
        </button>
        <button onClick={importantTodo}>
        중요만 보기
        </button>
        <button onClick={prevToggleFilter}>
        전체보기
        </button> 
      </div>
      {/* 리스트 */}
      <div>
        <h2>안한거</h2>
        <ul>
          {todos.map((todo)=>(
            <Todoitem todo={todo}/>
          ))}
        </ul>
      </div>
      <div>
        <h2>완료</h2>
        <ul>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App