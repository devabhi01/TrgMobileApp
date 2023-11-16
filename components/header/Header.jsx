import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useUserContext} from '../../utils/userContext';

const Header = props => {
  const {user} = useUserContext();
  return (
    <View style={{marginLeft: 15}}>
      <Text style={{color: '#FFF', fontSize: 12}}>Hello</Text>
      <Text style={{color: '#fff', fontSize: 18}}>{user.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
