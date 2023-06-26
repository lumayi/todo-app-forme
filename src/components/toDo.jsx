import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function ToDo() {
  return (
    <div className="flex flex-col gap-2 px-4 mt-4">
      <div>
        <span className="text-xs">오전</span>
        <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>브루노 약 주기</span>
          </div>
          <div>
            <FaTrash className="text-gray-700 cursor-pointer hover:text-red-400" />
          </div>
        </div>
        <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>브루노 산책하기</span>
          </div>
          <div>
            <FaTrash className="text-gray-700 cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>
      <div>
        <span className="text-xs">오후</span>
        <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>뿌냠 목욕 시키기</span>
          </div>
          <div>
            <FaTrash className="text-gray-700 cursor-pointer hover:text-red-400" />
          </div>
        </div>
        <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>뿌 낮잠 재우기</span>
          </div>
          <div>
            <FaTrash className="text-gray-700 cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
