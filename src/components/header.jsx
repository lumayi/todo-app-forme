import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 rounded-t bg-gray-300">
      <div>
        <FaSun className="text-orange-600 cursor-pointer hover:text-gray-500" />
      </div>
      <div className="flex gap-2">
        <span className="cursor-pointer hover:text-gray-500">전체</span>
        <span className="cursor-pointer hover:text-gray-500">해야할일</span>
        <span className="cursor-pointer hover:text-gray-500">완료</span>
      </div>
    </div>
  );
}
