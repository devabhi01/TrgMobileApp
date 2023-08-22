import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import ProfileSettings from '../components/UserSettings';
import HomeScreen from '../screen/HomeScreen';
import BottomNav from './BottomNav';
import AppDrawer from '../components/AppDrawer';
import DashBoard from '../screen/DashBoard';
import FeedBack from '../components/FeedBack';
import SettingScreen from '../screen/SettingScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName=""
        screenOptions={{headerShown: false}}
        drawerContent={props => <AppDrawer {...props} />}>
        <Drawer.Screen name="Home" component={BottomNav} />
        <Drawer.Screen name="User Setting" component={ProfileSettings} />
        <Drawer.Screen name="Dashboard" component={DashBoard} />
        <Drawer.Screen name="Feedback" component={FeedBack} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
