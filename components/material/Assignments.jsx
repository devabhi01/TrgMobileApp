import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Loader from '../courses/template/loading.jsx';
import LottieView from 'lottie-react-native';
const Assignments = () => {
  return (
    <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
      
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        loop
        style={{width: 100, height: 100,}}
      />
    </View>
  );
};

export default Assignments;

const styles = StyleSheet.create({});
