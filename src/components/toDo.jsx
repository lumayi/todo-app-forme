import React, { useContext, useState } from 'react';
import { ToDosContext } from '../context/todosContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import cls from 'classnames';
import OneToDoList from './oneToDoList';
import { DarkModeContext } from '../context/darkModeContext';
import { HeaderContext } from '../context/headerContext';

export default function ToDo() {
  const { todos, deleteTodo } = useContext(ToDosContext);
  const { darkMode } = useContext(DarkModeContext);
  const { menus } = useContext(HeaderContext);
  const { all, current, done } = menus;

  return (
    <div className="flex flex-col gap-2 px-4 mt-4 min-h-[20rem]">
      {todos['새벽'] && (
        <div>
          <span className={cls('text-xs', { 'text-white': darkMode })}>
            새벽
          </span>
          {todos['새벽'].map((value, index) => {
            if (all)
              return (
                <OneToDoList
                  todo={value}
                  time="새벽"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (current && !value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="새벽"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (done && value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="새벽"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
          })}
        </div>
      )}
      {todos['오전'] && (
        <div>
          <span className={cls('text-xs', { 'text-white': darkMode })}>
            오전
          </span>
          {todos['오전'].map((value, index) => {
            if (all)
              return (
                <OneToDoList
                  todo={value}
                  time="오전"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (current && !value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="오전"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (done && value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="오전"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
          })}
        </div>
      )}
      {todos['오후'] && (
        <div>
          <span className={cls('text-xs', { 'text-white': darkMode })}>
            오후
          </span>
          {todos['오후'].map((value, index) => {
            if (all)
              return (
                <OneToDoList
                  todo={value}
                  time="오후"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (current && !value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="오후"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (done && value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="오후"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
          })}
        </div>
      )}
      {todos['밤'] && (
        <div>
          <span className={cls('text-xs', { 'text-white': darkMode })}>밤</span>
          {todos['밤'].map((value, index) => {
            if (all)
              return (
                <OneToDoList
                  todo={value}
                  time="밤"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (current && !value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="밤"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
            if (done && value.done)
              return (
                <OneToDoList
                  todo={value}
                  time="밤"
                  deleteTodo={deleteTodo}
                  key={index + value.title}
                />
              );
          })}
        </div>
      )}
    </div>
  );
}
