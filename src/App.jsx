import React, { useState } from 'react';
import { DarkModeContextProvider } from './context/darkModeContext';
import Header from './components/Header';
import TodoList from './components/TodoList';

const filters = ['all', 'current', 'done'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-96 bg-white rounded dark:bg-black">
        <DarkModeContextProvider>
          <Header filters={filters} filter={filter} setFilter={setFilter} />
          <TodoList filter={filter} />
        </DarkModeContextProvider>
      </div>
    </div>
  );
}
