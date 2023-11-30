import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MoreOptBtn = props => {
  return (
    <TouchableOpacity
      style={[styles.Contbg, {backgroundColor: props.backgroundColor}]}
      onPress={props.onPress}>
      <View style={styles.innerCont}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <Icon name={props.IocnName} size={25} color="#fff" />
          <Text style={{color: 'white', fontSize: 18, marginLeft:10}}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoreOptBtn;

const styles = StyleSheet.create({
  Contbg: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    elevation: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  innerCont: {
    
    borderColor: 'white',
    height: 45,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});
