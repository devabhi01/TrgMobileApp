import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useUserContext } from '../utils/userContext';
import AuthStack from './AuthStack';
import StudentStack from './StudentStack';

const Stack = createStackNavigator();

const DecideStack = () => {
  const { user } = useUserContext();
  return (
    <>
      {user ? <StudentStack /> : <AuthStack />}
    </>
  );
};

export default DecideStack;
