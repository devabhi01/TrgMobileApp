import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import DrawerNav from '../../navigation/DrawerNav';

import { useNavigation } from '@react-navigation/native';

const HeaderDash = (props) => {
  const navigation = useNavigation();
  return (
    
      <TouchableOpacity style={{marginLeft:20}} onPress={() => {}}>
        <Icon name="bars" size={24} color="#fff" />
      </TouchableOpacity>
    
  )
}

export default HeaderDash

const styles = StyleSheet.create({})