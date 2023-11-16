import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnnouncmentIcon from './announcement.png'

const HeaderThreeDots = () => {
  return (
    <View style={{marginRight: 20,flexDirection:'row'}}>
      <TouchableOpacity style={{marginRight: 10}}>
        <Image source={AnnouncmentIcon} style={{height:24,width:24}}/>
        {/* <Icon name="bullhorn" size={24} color="#fff" /> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="dots-vertical" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderThreeDots;

const styles = StyleSheet.create({});
