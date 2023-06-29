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

  return (
    <>
      <div className="flex flex-col gap-2 px-4 mt-4 min-h-[20rem]">
        <div>
          <span className="text-xs">새벽</span>
          {todos &&
            todos
              .filter((value) => value.time === 'dawn')
              .map((value) => {
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
