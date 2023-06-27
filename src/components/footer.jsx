import React, { useContext, useRef, useState } from 'react';
import { ToDosContext } from '../context/todosContext';
import { DarkModeContext } from '../context/darkModeContext';
import cls from 'classnames';

export default function Footer() {
  const initialValue = { time: '', title: '' };
  const [todoAdd, setTodoAdd] = useState(initialValue);
  const { addTodo } = useContext(ToDosContext);
  const { darkMode } = useContext(DarkModeContext);
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
    <div
      className={cls(
        'mt-14 p-4 rounded-b',
        { 'bg-gray-300 ': !darkMode },
        { 'bg-slate-700 ': darkMode }
      )}
    >
      <div className="flex justify-center gap-2 items-center">
        <select
          onChange={handleTime}
          className={cls(
            'p-2 rounded outline-none ',
            {
              'bg-white': !darkMode,
            },
            { 'bg-gray-800 text-white': darkMode }
          )}
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
            className={cls('p-2 w-52 rounded-l outline-none indent-2', {
              'bg-gray-800 text-white': darkMode,
            })}
          />
          <button
            onClick={handleAdd}
            className={cls(
              'rounded-r p-2 text-white',
              { 'bg-blue-500': darkMode },
              { 'bg-orange-500': !darkMode }
            )}
          >
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}
