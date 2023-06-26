import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex justify-between font-semibold">
      <div>
        <FaSun className="cursor-pointer hover:text-gray-500" />
      </div>
      <div className="flex gap-2">
        <span className="cursor-pointer hover:text-gray-500">전체</span>
        <span className="cursor-pointer hover:text-gray-500">해야할일</span>
        <span className="cursor-pointer hover:text-gray-500">완료</span>
      </div>
    </div>
  );
}
