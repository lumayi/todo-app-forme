import { createContext, useState } from 'react';

export const HeaderContext = createContext();
export const HeaderContextProvider = ({ children }) => {
  const [menus, setMenus] = useState({
    all: true,
    current: false,
    done: false,
  });
  return (
    <HeaderContext.Provider value={{ menus, setMenus }}>
      {children}
    </HeaderContext.Provider>
  );
};
