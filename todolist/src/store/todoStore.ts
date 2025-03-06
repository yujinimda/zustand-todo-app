import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 스토어에 일단 필요한거 다 담아야하는 배열, 추가한 todo(객체){id, 내용, 완료여부}...
// 힘수 : 버튼누르면 추가하기 함수, 수정하기 함수, 삭제하기 함수, 완료상태변경함수 
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

//Zustand 스토어 생성
//왼쪽단어들은 함수명을 나타내는거고 사실 스토어 안에 함수를 만들고 그걸 전역으로 사용하게 하는게
//Zustand인데 이때 함수를 반환하는것이 아니라 그저 상태값만 변경하는것이므로 반환값이 없는 ts의 void타입을 넣어야한다.(선택)
type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void; // 추가 기능
  deleteTodo: (id: number) => void; // 삭제 기능
  allDeleteTodo: () => void; //전체 삭제 기능
  toggleTodo: (id: number) => void; // 완료 상태 변경
  editTodo: (id: number, newText: string) => void; // 수정 기능
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, completed: false }],
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      editTodo: (id, newText) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
          ),
        })),
      allDeleteTodo: () =>
        set(() => ({
          todos: [],
        })),
    }),
    {
      name: "todo-storage", // 로컬 스토리지 키 이름
      storage: createJSONStorage(() => localStorage), // localStorage 사용
    }
  )
);


