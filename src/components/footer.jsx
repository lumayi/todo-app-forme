import React, { useContext, useRef, useState } from 'react';
import { ToDosContext } from '../context/todosContext';

export default function Footer() {
  const initialValue = { time: '', title: '' };
  const [todoAdd, setTodoAdd] = useState(initialValue);
  const { addTodo } = useContext(ToDosContext);
  const inputRef = useRef(null);
  const handleAdd = () => {
    if (!todoAdd.time) return alert('시간대 선택을 해주세요.');
    if (!todoAdd.title) return alert('해야할 일을 입력해주세요.');
    addTodo(todoAdd);
    inputRef.current.value = '';
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
      title: e.target.value,
    }));
  };
  return (
    <div className="mt-14 bg-gray-300 p-4 rounded-b">
      <div className="flex justify-center gap-2 items-center">
        <select
          onChange={handleTime}
          className="p-2 rounded outline-none bg-gray-100"
        >
          <option value="">시간</option>
          <option value="새벽">새벽</option>
          <option value="오전">오전</option>
          <option value="오후">오후</option>
          <option value="밤">밤</option>
        </select>
        <div className="flex items-center justify-center">
          <input
            ref={inputRef}
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
