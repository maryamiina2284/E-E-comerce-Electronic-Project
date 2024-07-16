import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
