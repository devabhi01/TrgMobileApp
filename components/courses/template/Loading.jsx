import {StyleSheet, Text, View, Modal, Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        source={require('../../../assets/loading.json')}
        autoPlay
        loop
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
