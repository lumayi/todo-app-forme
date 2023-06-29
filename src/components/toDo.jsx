import React from 'react';
import { FaTrash } from 'react-icons/fa';
import cls from 'classnames';

export default function Todo({ todo, handleUpdate, handleDelete }) {
  const { id, time, title, done } = todo;
  const handleStatus = (e) => {
    const status = !!e.target.checked;
    return handleUpdate({ ...todo, done: status });
  };
  return (
    <div className="flex h-9 justify-between items-center rounded px-2">
      <div className="flex justify-center items-center gap-2">
        <input
          type="checkbox"
          id={id}
          className="cursor-pointer"
          onChange={(e) => handleStatus(e)}
          checked={done}
        />
        <label htmlFor={id} className={cls({ 'line-through': done })}>
          {title}
        </label>
      </div>
      <div>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleDelete(todo)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
