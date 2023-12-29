import React from 'react';
import { useUserContext } from '../utils/userContext';
import AuthStack from './AuthStack';
import StudentStack from './StudentStack';

const DecideStack = () => {
  const { user } = useUserContext();
  return (
    <>
      {user && user?.isVerified ? <StudentStack /> : <AuthStack />}
    </>
  );
};

export default DecideStack;
