import React from 'react';
import Header from './components/header';

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-w-screen min-h-screen">
      <div className="w-96">
        <Header />
      </div>
    </div>
  );
}
