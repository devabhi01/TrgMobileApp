import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import ProfileSettings from '../screen/ProfileSettings';
import HomeScreen from '../screen/HomeScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile Setting" component={ProfileSettings} />
        </Drawer.Navigator>
      
    </>
  );
};

export default AppStack;
