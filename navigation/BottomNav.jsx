import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';

import MaterialScreen from '../screen/MaterialScreen';
import SettingScreen from '../screen/SettingScreen';

import CourseScreen from '../screen/CourseScreen';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Material" component={MaterialScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomNav;
