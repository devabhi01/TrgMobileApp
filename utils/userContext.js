// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// creating context
const UserContext = createContext();

// creating its provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(true); // Initialize user state as null

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook 
export const useUserContext = () => {
    return useContext(UserContext);
  };
