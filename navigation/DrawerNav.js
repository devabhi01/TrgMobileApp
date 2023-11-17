import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import BottomNav from './BottomNav';
import {useNavigation} from '@react-navigation/native';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.graylight,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 18,
          height: 25,
          textAlignVertical: 'center',
        },
      }}>
      <Drawer.Screen
        name="home_drawer"
        component={BottomNav}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => {
            return (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={22}
                color={focused ? colors.graylight : colors.primary}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
