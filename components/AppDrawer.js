import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {colors} from '../constants';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const AppDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.graylight}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          style={{padding: 30}}
          source={require('../assets/img/bg_redish.jpg')}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 80, height: 80}}
              source={require('../assets/img/user.png')}
            />

            <Text
              style={{fontSize: 24, fontWeight: 500, color: colors.primary}}>
              Abhishek
            </Text>
          </View>
        </ImageBackground>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default AppDrawer;
