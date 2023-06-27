import { createContext } from 'react';
import { useImmer } from 'use-immer';

export const ToDosContext = createContext(null);
export const ToDosContextProvider = ({ children }) => {
  const [todos, updateTodos] = useImmer(initialTodo);
  const changeTodo = (editTodo) => {
    const index = todos[editTodo.time].findIndex(
      (value) => value.title === editTodo.title
    );
    updateTodos((todos) => {
      todos[editTodo.time][index].done = !todos[editTodo.time][index].done;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };
  const addTodo = (addTodo) => {
    updateTodos((todos) => {
      if (todos && todos[addTodo.time])
        todos[addTodo.time].push({ title: addTodo.title, done: false });
      else todos[addTodo.time] = [{ title: addTodo.title, done: false }];
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };
  const deleteTodo = (deleteTodo) => {
    updateTodos((todos) => {
      const index = todos[deleteTodo.time].findIndex(
        (value) => value.title === deleteTodo.title
      );
      todos[deleteTodo.time].splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  };
  return (
    <ToDosContext.Provider value={{ todos, changeTodo, addTodo, deleteTodo }}>
      {children}
    </ToDosContext.Provider>
  );
};

const initialTodo = JSON.parse(localStorage.getItem('todos')) || {};
