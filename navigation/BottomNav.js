<<<<<<< HEAD
import { View, Text } from 'react-native';
=======
>>>>>>> dcbdbcf34e65e968481ff2ce2f35efa1f5208644
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
<<<<<<< HEAD

import TestSeriesScreen from '../screen/MaterialScreen';
=======
import MaterialScreen from '../screen/MaterialScreen';
>>>>>>> dcbdbcf34e65e968481ff2ce2f35efa1f5208644
import SettingScreen from '../screen/SettingScreen';
import CourseScreen from '../screen/CourseScreen';
<<<<<<< HEAD
import { colors } from '../constants';
=======
import {colors} from '../constants';
import DrawerNav from './DrawerNav';
>>>>>>> dcbdbcf34e65e968481ff2ce2f35efa1f5208644

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: '#dc3545' },
        headerTitleAlign: 'center',
        headerTintColor: '#eee',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 800,
          color: '#dc3545',
          paddingBottom: 3,
        },
        tabBarActiveBackgroundColor: colors.graylight,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'BottomHome') {
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
      })}>

      {/* nesting drawer  not visible*/}
      {/* <Tab.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{title: '', tabBarItemStyle:{maxWidth:0}}}
      /> */}

      <Tab.Screen
        name="BottomHome"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />

      <Tab.Screen
        name="Course"
        component={CourseScreen}
        options={{ headerShown: true }}
      />

      <Tab.Screen
        name="Material"
        component={TestSeriesScreen}
        options={{
          headerShown: true,
          title: 'Test Series'
        }}
      />
      
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
