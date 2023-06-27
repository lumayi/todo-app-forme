import React, { useContext, useState } from 'react';
import { ToDosContext } from '../context/todosContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import cls from 'classnames';
import OneToDoList from './oneToDoList';

export default function ToDo() {
  const { todos, deleteTodo } = useContext(ToDosContext);
  const [menus, setMenus] = useState({
    all: true,
    current: false,
    done: false,
  });
  const { all, current, done } = menus;

  return (
    <>
      <div className="flex items-center justify-between p-4 rounded-t bg-gray-300">
        <div>
          <FaSun className="text-orange-600 cursor-pointer hover:text-gray-500" />
        </div>
        <div className="flex gap-2">
          <span
            className={cls('cursor-pointer hover:text-black', {
              'font-semibold': all,
            })}
            onClick={() => setMenus({ all: true, current: false, done: false })}
          >
            전체
          </span>
          <span
            className={cls('cursor-pointer hover:text-black', {
              'font-semibold': current,
            })}
            onClick={() => setMenus({ all: false, current: true, done: false })}
          >
            해야할일
          </span>
          <span
            className={cls('cursor-pointer hover:text-black', {
              'font-semibold': done,
            })}
            onClick={() => setMenus({ all: false, current: false, done: true })}
          >
            완료
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 mt-4 min-h-[20rem]">
        {todos['새벽'] && (
          <div>
            {todos['새벽'].map((value, index) => {
              if (all)
                return (
                  <OneToDoList
                    todo={value}
                    time="새벽"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (current && !value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="새벽"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (done && value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="새벽"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
            })}
          </div>
        )}
        {todos['오전'] && (
          <div>
            {todos['오전'].map((value, index) => {
              if (all)
                return (
                  <OneToDoList
                    todo={value}
                    time="오전"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (current && !value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="오전"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (done && value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="오전"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
            })}
          </div>
        )}
        {todos['오후'] && (
          <div>
            {todos['오후'].map((value, index) => {
              if (all)
                return (
                  <OneToDoList
                    todo={value}
                    time="오후"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (current && !value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="오후"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (done && value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="오후"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
            })}
          </div>
        )}
        {todos['밤'] && (
          <div>
            {todos['밤'].map((value, index) => {
              if (all)
                return (
                  <OneToDoList
                    todo={value}
                    time="밤"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (current && !value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="밤"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
              if (done && value.done)
                return (
                  <OneToDoList
                    todo={value}
                    time="밤"
                    deleteTodo={deleteTodo}
                    index={index}
                    key={index + value.title}
                  />
                );
            })}
          </div>
        )}
      </div>
    </>
  );
}
