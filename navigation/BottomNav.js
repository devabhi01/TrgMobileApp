import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import MoreScreen from '../screen/MoreScreen';
import TestSeriesScreen from '../screen/TestSeriesScreen';
import SettingScreen from '../screen/SettingScreen';
import CourseScreen from '../screen/CourseScreen';
import {colors} from '../constants';
import Header from '../components/header/Header';
import HeaderThreeDots from '../components/header/HeaderThreeDots';
import HeaderDash from '../components/header/HeaderDash';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        headerStyle: {backgroundColor: '#dc3545'},
        headerTitleAlign: 'center',
        headerTintColor: '#eee',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 800,
          color: '#dc3545',
          paddingBottom: 3,
        },
        tabBarActiveBackgroundColor: colors.graylight,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Course') {
            iconName = focused ? 'tv' : 'tv-outline';
          } else if (route.name === 'TestSeries') {
            iconName = focused ? 'book-sharp' : 'book-outline';
          }
          return <Icon name={iconName} size={22} color={'#dc3545'} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Header />,
          headerTitleAlign: 'left',
          headerRight: () => <HeaderThreeDots />,
          headerLeft: () => <HeaderDash />,
        }}
      />

      <Tab.Screen
        name="Course"
        component={CourseScreen}
        options={{
          headerShown: true,
          headerRight: () => <HeaderThreeDots />,
          headerLeft: () => <HeaderDash />,
        }}
      />

      <Tab.Screen
        name="TestSeries"
        component={TestSeriesScreen}
        options={{
          headerShown: true,
          title: 'Test Series',
          headerRight: () => <HeaderThreeDots />,
          headerLeft: () => <HeaderDash />,
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: true,
          headerRight: () => <HeaderThreeDots />,
          headerLeft: () => <HeaderDash />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
