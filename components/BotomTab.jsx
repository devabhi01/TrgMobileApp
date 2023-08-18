import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import MaterialScreen from '../screen/MaterialScreen';
import SettingScreen from '../screen/SettingScreen';

const Tab = createMaterialBottomTabNavigator();
const BotomTab = () => {
  return (
    <SafeAreaView>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home1" component={HomeScreen} />
        <Tab.Screen name="Material" component={MaterialScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BotomTab;
