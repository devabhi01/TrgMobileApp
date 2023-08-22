import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';

const Cbse = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        <Image style={styles.img} source={require('../img/cbse_pos.png')} />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cbse;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
});
