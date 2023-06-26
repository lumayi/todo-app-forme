import React, { useReducer, useState } from 'react';
import ToDoReducer from '../reducer/todo-reducer';

export default function Footer() {
  const innitialTodo = localStorage.getItem('todos');
  const [todos, dispatch] = useReducer(ToDoReducer, JSON.parse(innitialTodo));
  const [todoAdd, setTodoAdd] = useState();
  const handleAdd = () => {
    dispatch({ type: 'add', todoAdd });
  };
  const handleTime = (e) => {
    setTodoAdd((prev) => ({
      ...prev,
      time: e.target.value,
    }));
  };
  const handleName = (e) => {
    setTodoAdd((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  return (
    <div className="mt-14 bg-gray-300 p-4 rounded-b">
      <div className="flex justify-center gap-2 items-center">
        <select
          onChange={handleTime}
          className="p-2 rounded outline-none bg-gray-100"
        >
          <option value="dawn">새벽</option>
          <option value="morning">오전</option>
          <option value="noon">오후</option>
          <option value="night">밤</option>
        </select>
        <div className="flex items-center justify-center">
          <input
            onChange={handleName}
            type="text"
            placeholder="해야할 일을 입력해주세요."
            className="p-2 w-52 rounded-l outline-none indent-2"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 rounded-r p-2 text-white"
          >
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}
