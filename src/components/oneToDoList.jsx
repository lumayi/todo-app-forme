import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ToDosContext } from '../context/todosContext';
import cls from 'classnames';
import { DarkModeContext } from '../context/darkModeContext';

export default function OneToDoList({ todo, time, deleteTodo }) {
  const { changeTodo } = useContext(ToDosContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className="flex h-9 justify-between items-center rounded px-2">
        <div className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            className="cursor-pointer"
            onClick={() => changeTodo({ time, title: todo.title })}
          />
          <span
            className={cls(
              { 'line-through': todo.done },
              { 'text-black': !darkMode },
              { 'text-gray-200': darkMode }
            )}
          >
            {todo.title}
          </span>
        </div>
        <div>
          <FaTrash
            className={cls(
              'cursor-pointer',
              { 'text-gray-700 hover:text-red-400': !darkMode },
              { 'text-gray-200 hover:text-blue-400': darkMode }
            )}
            onClick={() => deleteTodo({ title: todo.title, time })}
          />
        </div>
      </div>
    </>
  );
}
