import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { DarkModeContext } from '../context/darkModeContext';
import cls from 'classnames';

export default function Header({ filters, filter, setFilter }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="flex items-center justify-between p-4 rounded-t bg-gray-300">
      <button
        type="button"
        className={cls(
          'text-lg cursor-pointer hover:text-gray-200',
          { 'text-blue-400 ': darkMode },
          { 'text-orange-600': !darkMode }
        )}
        onClick={toggleDarkMode}
      >
        {darkMode ? <HiMoon /> : <HiSun />}
      </button>
      <div className="flex gap-2">
        {filters.map((value, index) => (
          <span
            key={index}
            className={cls('cursor-pointer', {
              'opacity-[0.50]': filter !== value,
            })}
            onClick={() => setFilter(value)}
          >
            {value === 'all' && '전체'}
            {value === 'current' && '해야할일'}
            {value === 'done' && '완료'}
          </span>
        ))}
      </div>
    </header>
  );
}
