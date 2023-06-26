import React from 'react';
import Header from './components/header';
import ToDo from './components/toDo';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-w-screen min-h-screen">
      <div className="w-96 bg-gray-100 rounded ">
        <Header />
        <ToDo />
        <Footer />
      </div>
    </div>
  );
}
