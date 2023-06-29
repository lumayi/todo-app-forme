import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodoFromLocalStorage);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (todo) =>
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  const handleDelete = (todo) =>
    setTodos(todos.filter((t) => t.id !== todo.id));

  const dawn = filteredItem(
    todos.filter((value) => value.time === 'dawn'),
    filter
  );
  const morning = filteredItem(
    todos.filter((value) => value.time === 'morning'),
    filter
  );
  const afternoon = filteredItem(
    todos.filter((value) => value.time === 'afternoon'),
    filter
  );
  const night = filteredItem(
    todos.filter((value) => value.time === 'night'),
    filter
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="bg-white dark:bg-black h-[25rem] flex flex-col gap-2 p-4 dark:text-gray-100 overflow-y-scroll">
        <div>
          {dawn.length > 0 && <span className="text-xs">새벽</span>}
          {dawn.map((value) => {
            return (
              <Todo
                todo={value}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                key={value.id}
              />
            );
          })}
        </div>
        <div>
          {morning.length > 0 && <span className="text-xs">오전</span>}
          {morning.map((value) => {
            return (
              <Todo
                todo={value}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                key={value.id}
              />
            );
          })}
        </div>
        <div>
          {afternoon.length > 0 && <span className="text-xs">오후</span>}
          {afternoon.map((value) => {
            return (
              <Todo
                todo={value}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                key={value.id}
              />
            );
          })}
        </div>
        <div>
          {night.length > 0 && <span className="text-xs">저녁</span>}
          {night.map((value) => {
            return (
              <Todo
                todo={value}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                key={value.id}
              />
            );
          })}
        </div>
      </div>
      <AddTodo handleAdd={handleAdd} />
    </>
  );
}

function readTodoFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function filteredItem(todos, filter) {
  if (filter === 'current') return todos.filter((t) => t.done === false);
  else if (filter === 'done') return todos.filter((t) => t.done === true);
  else return todos;
}
