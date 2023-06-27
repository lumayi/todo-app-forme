import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DarkModeContext } from '../context/darkModeContext';
import cls from 'classnames';
import { HeaderContext } from '../context/headerContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { menus, setMenus } = useContext(HeaderContext);
  const { all, current, done } = menus;
  return (
    <div
      className={cls(
        'flex items-center justify-between p-4 rounded-t',
        { 'bg-gray-300': !darkMode },
        { 'bg-slate-700': darkMode }
      )}
    >
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
      <div className={cls('flex gap-2', { 'text-white': darkMode })}>
        <span
          className={cls(
            'cursor-pointer',
            {
              'font-semibold': all,
            },
            { 'hover:text-gray-700': !darkMode },
            { 'hover:text-gray-300': darkMode }
          )}
          onClick={() => setMenus({ all: true, current: false, done: false })}
        >
          전체
        </span>
        <span
          className={cls(
            'cursor-pointer',
            {
              'font-semibold': current,
            },
            { 'hover:text-gray-700': !darkMode },
            { 'hover:text-gray-300': darkMode }
          )}
          onClick={() => setMenus({ all: false, current: true, done: false })}
        >
          해야할일
        </span>
        <span
          className={cls(
            'cursor-pointer',
            {
              'font-semibold': done,
            },
            { 'hover:text-gray-700': !darkMode },
            { 'hover:text-gray-300': darkMode }
          )}
          onClick={() => setMenus({ all: false, current: false, done: true })}
        >
          완료
        </span>
      </div>
    </div>
  );
}
