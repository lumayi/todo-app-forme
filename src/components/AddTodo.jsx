import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ handleAdd }) {
  const [todoAdd, setTodoAdd] = useState(initialValue);
  const { title, time } = todoAdd;
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time) return alert('시간대를 선택 해주세요.');
    if (title.trim().length === 0) return;
    handleAdd({ id: uuidv4(), title, time, done: false });
    inputRef.current.value = '';
    setTodoAdd({ ...todoAdd, title: '' });
  };
  const handleTime = (e) =>
    setTodoAdd({
      ...todoAdd,
      time: e.target.value,
    });

  const handleTitle = (e) =>
    setTodoAdd({
      ...todoAdd,
      title: e.target.value,
    });
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="p-4 rounded-b bg-gray-300 dark:bg-slate-700"
    >
      <div className="flex justify-center gap-2 items-center">
        <select
          onChange={(e) => handleTime(e)}
          className="p-2 rounded outline-none dark:bg-gray-800 dark:text-white"
        >
          <option value="">시간대</option>
          <option value="dawn">새벽</option>
          <option value="morning">오전</option>
          <option value="afternoon">오후</option>
          <option value="night">밤</option>
        </select>
        <div className="flex items-center justify-center">
          <input
            ref={inputRef}
            onChange={(e) => handleTitle(e)}
            type="text"
            placeholder="해야할 일을 입력해주세요."
            className="py-2 px-4 w-52 rounded-l outline-none dark:bg-gray-800 dark:text-white"
          />
          <button className="rounded-r py-2 px-4 text-white bg-orange-500 dark:bg-blue-500">
            추가하기
          </button>
        </div>
      </div>
    </form>
  );
}

const initialValue = { time: '', title: '' };
