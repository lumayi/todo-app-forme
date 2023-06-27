import React, { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
import cls from 'classnames';

export default function ToDos({ children }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={cls(
        'flex flex-col justify-center items-center min-w-screen min-h-screen',
        { 'bg-gray-900': darkMode },
        { 'bg-gray-100': !darkMode }
      )}
    >
      <div
        className={cls(
          'w-96  rounded',
          { 'bg-black': darkMode },
          { 'bg-white': !darkMode }
        )}
      >
        {children}
      </div>
    </div>
  );
}
