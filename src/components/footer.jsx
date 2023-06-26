import React from 'react';

export default function Footer() {
  return (
    <div className="mt-14 bg-gray-300 p-4 rounded-b">
      <div className="flex justify-center gap-2 items-center">
        <select className="p-2 rounded outline-none bg-gray-100">
          <option value="dawn">새벽</option>
          <option value="morning">오전</option>
          <option value="noon">오후</option>
          <option value="night">밤</option>
        </select>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="해야할 일을 입력해주세요."
            className="p-2 w-52 rounded-l outline-none indent-2"
          />
          <button className="bg-blue-500 rounded-r p-2 text-white">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}
