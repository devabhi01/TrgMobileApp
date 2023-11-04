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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import CbseSVG from '../assets/img/cbse.svg';
import {colors} from '../constants';

const TestSeriesScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        <Image
          style={styles.img}
          source={require('../assets/img/materials_pos.png')}
        />

        <View style={styles.container}>
          <View style={{paddingHorizontal: 30}}>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('test_detail')}>
                <MaterialIcon name="bookshelf" size={30} color={colors.white} />
                <Text style={styles.textBtn}>Lets Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestSeriesScreen;

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

  btn: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    
    paddingLeft: 20,
    alignItems: 'center',
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15,
    color: colors.white,
    paddingLeft: 10,
  },
});
