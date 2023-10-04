// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// creating context
const UserContext = createContext();

// creating its provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state as null
  const [jwtoken, setJwtoken] = useState("")

  return (
    <UserContext.Provider value={{ user, setUser, jwtoken, setJwtoken }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook 
export const useUserContext = () => {
    return useContext(UserContext);
  };