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

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="drawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
