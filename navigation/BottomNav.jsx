import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Fa from 'react-native-vector-icons/FontAwesome6';

import HomeScreen from '../screen/HomeScreen';

import MaterialScreen from '../screen/MaterialScreen';
import SettingScreen from '../screen/SettingScreen';

import CourseScreen from '../screen/CourseScreen';
import {colors} from '../constants';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        
        tabBarLabelStyle: {fontSize: 12, fontWeight: 500},
        tabBarActiveBackgroundColor: colors.white,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Course') {
            iconName = focused ? 'tv' : 'tv-outline';
          } else if (route.name === 'Material') {
            iconName = focused ? 'book-sharp' : 'book-outline';
          }
          return <Icon name={iconName} size={22} color={'#dc3545'} />;
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Material" component={MaterialScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomNav;
