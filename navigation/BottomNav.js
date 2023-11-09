import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import TestSeriesScreen from '../screen/TestSeriesScreen';
import SettingScreen from '../screen/SettingScreen';
import CourseScreen from '../screen/CourseScreen';
import {colors} from '../constants';

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
          } else if (route.name === 'TestSeries') {
            iconName = focused ? 'book-sharp' : 'book-outline';
          }
          return <Icon name={iconName} size={22} color={'#dc3545'} />;
        },
      })}>

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
        name="TestSeries"
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
