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

const Tab = createMaterialBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="signup" component={SignUpScreen} />
        </Drawer.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'comments'} size={24} />
            ),
          }} />
          <Tab.Screen name="Test" component={TestScreen} />
          <Tab.Screen name="Material" component={MaterialScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

styles = StyleSheet.create({})

export default App;