import { useState } from "react";
import { useTodoStore, Todo} from "../store/todoStore";

type TodoItemProps = {
  todo: Todo;
};

export default function Todoitem({ todo }: TodoItemProps){
  const {toggleTodo, deleteTodo, editTodo} = useTodoStore() ;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState(todo.text); //수정 전 테스트

  const handleEdit = () => {
    editTodo(todo.id, editText); // Zustand 상태 업데이트
    console.log("Before edit:", isEditing);
    setIsEditing(false) //수정모두 종료
    console.log("Before edit:", isEditing);
  }

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span onClick={() => {
          console.log("Span clicked!");
          setIsEditing(true)
        }}>{todo.text}</span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </li>
  )
}