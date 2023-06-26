import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function ToDo() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div>
        <span className="text-xs">12:00 ~ 13:00</span>
        <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>브루노 약 주기</span>
          </div>
          <div>
            <FaTrash className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
        <div className="flex h-9 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>브루노 약 주기</span>
          </div>
          <div>
            <FaTrash className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>
      <div>
        <span className="text-xs">16:00 ~ 17:00</span>
        <div className="flex h-8 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>브루노 약 주기</span>
          </div>
          <div>
            <FaTrash className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
        <div className="flex h-8 justify-between items-center hover:bg-gray-300 rounded px-2">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />
            <span>브루노 약 주기</span>
          </div>
          <div>
            <FaTrash className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
