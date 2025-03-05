import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export default function Todoitem({ todo }){
  const {toggleTodo, deleteTodo} = useTodoStore() ;
  const {isEditing, setIsEditing} = useState(false); //수정 모드 여부
  const [editText, setEditText] = useState(todo.text); //수정 전 테스트

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? <input
        type="text"
        value={todo.text}
      />: <span></span> }
      
      
      <button onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </li>
  )
}