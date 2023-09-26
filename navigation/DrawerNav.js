import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileSettings from '../components/ProfileSettings';
import HomeScreen from '../screen/HomeScreen';
import AppDrawer from '../components/AppDrawer';
import DashBoard from '../screen/DashBoard';
import FeedBack from '../components/FeedBack';
import SettingScreen from '../screen/SettingScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName=""
        screenOptions={{ headerShown: false }}
        drawerContent={props => <AppDrawer {...props} />}>
          {/* nesting bottom nav  */}
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="Profile_Setting" component={ProfileSettings} options={{ title: 'Profile Setting' }} />
        <Drawer.Screen name="Dashboard" component={DashBoard} />
        <Drawer.Screen name="Feedback" component={FeedBack} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNav;
