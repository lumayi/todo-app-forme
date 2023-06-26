import React from 'react';
import { FaSun } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex justify-between text-white">
      <div>
        <FaSun />
      </div>
      <div className="flex gap-2">
        <span>전체</span>
        <span>해야할일</span>
        <span>완료</span>
      </div>
    </div>
  );
}
