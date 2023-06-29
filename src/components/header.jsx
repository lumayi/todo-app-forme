import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DarkModeContext } from '../context/darkModeContext';

export default function Header({ filters, filter, setFilter }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className="flex items-center justify-between p-4 rounded-t bg-gray-300">
      <div>
        {darkMode ? (
          <FaMoon
            className="text-blue-400 cursor-pointer hover:text-gray-300"
            onClick={toggleDarkMode}
          />
        ) : (
          <FaSun
            className="text-orange-600 cursor-pointer hover:text-gray-400"
            onClick={toggleDarkMode}
          />
        )}
      </div>
      <div className="flex gap-2">
        {filters.map((value, index) => (
          <span
            key={index}
            className="cursor-pointer"
            onClick={() => setFilter(value)}
          >
            {value}
          </span>
        ))}
      </div>
    </header>
  );
}
