import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';

const Ssc = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.img} source={require('../img/ssc_pos.png')} />
        <View style={styles.container}>
          <View style={{paddingHorizontal: 30}}>
            <View style={{marginVertical: 10}}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ssc;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
  container: {
    backgroundColor: colors.graylight,
    marginTop: -20,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  
});
