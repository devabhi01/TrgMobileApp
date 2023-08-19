import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// impoterted Component
import LoginSignup from '../screen/LoginSignup';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import HomeScreen from '../screen/HomeScreen';
import AppDrawer from '../components/AppDrawer';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="homee" component={HomeScreen} />
      <Stack.Screen name="Home" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default AuthStack;
