import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
const HeaderDash = () => {
  return (
    
      <TouchableOpacity style={{marginLeft:20}}>
        <Icon name="bars" size={24} color="#fff" />
      </TouchableOpacity>
    
  )
}

export default HeaderDash

const styles = StyleSheet.create({})