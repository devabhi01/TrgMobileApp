// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// creating context
const UserContext = createContext();

// creating its provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state as null
  const [jwtoken, setJwtoken] = useState("")
  const [downloads, setDownloads] = useState([]);
  const [isOldUser, setIsOldUser] = useState(false);
  const [quizData, setQuizData] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser, jwtoken, setJwtoken, downloads, setDownloads, isOldUser, setIsOldUser, quizData, setQuizData }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook 
export const useUserContext = () => {
  return useContext(UserContext);
};
