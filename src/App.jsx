import React from 'react';
import ToDo from './components/toDo';
import Footer from './components/footer';
import { ToDosContextProvider } from './context/todosContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import ToDos from './pages/todos';
import Header from './components/header';
import { HeaderContextProvider } from './context/headerContext';

export default function App() {
  return (
    <DarkModeContextProvider>
      <ToDos>
        <ToDosContextProvider>
          <HeaderContextProvider>
            <Header />
            <ToDo />
          </HeaderContextProvider>
          <Footer />
        </ToDosContextProvider>
      </ToDos>
    </DarkModeContextProvider>
  );
}
