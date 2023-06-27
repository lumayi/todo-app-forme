import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ToDosContext } from '../context/todosContext';
import cls from 'classnames';

export default function OneToDoList({ todo, time, deleteTodo, index }) {
  const { todos, changeTodo } = useContext(ToDosContext);
  return (
    <>
      {index === 0 && <span className="text-xs">{time}</span>}
      <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
        <div className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            onClick={() => changeTodo({ time, title: todo.title })}
          />
          <span className={cls({ 'line-through': todo.done })}>
            {todo.title}
          </span>
        </div>
        <div>
          <FaTrash
            className="text-gray-700 cursor-pointer hover:text-red-400"
            onClick={() => deleteTodo({ title: todo.title, time })}
          />
        </div>
      </div>
    </>
  );
}
