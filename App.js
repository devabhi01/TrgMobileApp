// import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native'
import { PaperProvider } from 'react-native-paper';
import SignUpScreen from './screen/SignUpScreen';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from "./screen/HomeScreen";
import SettingScreen from "./screen/SettingScreen";
import TestScreen from "./screen/TestScreen";
import React, { useState } from 'react'
import MaterialScreen from './screen/MaterialScreen';
import { createStackNavigator } from "@react-navigation/stack"

import LoginSignup from './screen/LoginSignup';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
        </Stack.Navigator>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="signup" component={SignUpScreen} />
        </Drawer.Navigator>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'home'} size={24} />
            ),
          }} />
          <Tab.Screen name="Test" component={TestScreen} options={{
            tabBarLabel: 'Test',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'file'} size={24} />
            ),
          }} />
          <Tab.Screen name="Material" component={MaterialScreen} options={{
            tabBarLabel: 'Material',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'folder'} size={24} />
            ),
          }} />
          <Tab.Screen name="Setting" component={SettingScreen} options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'info'} size={24} />
            ),
          }} />
          <Tab.Screen name="Login" component={LoginSignup} options={{
            tabBarLabel: 'Login/Register',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'info'} size={24} />
            ),
          }} />
        </Tab.Navigator> */}

      </NavigationContainer>
    </PaperProvider>
  )
}

styles = StyleSheet.create({})

export default App;