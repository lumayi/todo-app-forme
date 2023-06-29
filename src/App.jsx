import React, { useState } from 'react';
import { DarkModeContextProvider } from './context/darkModeContext';
import Header from './components/Header';
import TodoList from './components/TodoList';

const filters = ['all', 'current', 'done'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeContextProvider>
      <Header filters={filters} filter={filter} setFilter={setFilter} />
      <TodoList filter={filter} />
    </DarkModeContextProvider>
  );
}
