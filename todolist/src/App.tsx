import './App.css'
import Todoitem from './components/TodoItem';
import { useTodoStore } from './store/todoStore';
import { useState } from "react";

function App() {
  const {todos, addTodo, toggleTodo, deleteTodo} = useTodoStore() ;
  const [text, setText] = useState("");

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
      </div>
      {/* 리스트 */}
      <div>
        <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <input
                type="text"
                value={todo.text}
              />
              <button onClick={() => deleteTodo(todo.id)}>
                X
              </button>
              <Todoitem todo={todo}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
