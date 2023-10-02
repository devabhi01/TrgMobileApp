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
import { colors } from '../constants';

const TestSeriesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
      <ScrollView>
        <Image
          style={styles.img}
          source={require('../assets/img/materials_pos.png')}
        />

        <View style={styles.container}>
          <View style={{ paddingHorizontal: 30 }}>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity style={styles.btn}>
                <MaterialIcon
                  name="bookshelf"
                  size={30}
                  color={colors.primary}
                />
                <Text style={styles.textBtn}>Your Materials</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <CbseSVG style={{ width: 30, height: 30 }} />
                <Text style={styles.textBtn}>CBSE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Image
                  style={{ width: 30, height: 45 }}
                  source={require('../assets/img/icse1.png')}
                />
                <Text style={styles.textBtn}>ICSE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Image
                  style={{ width: 30, height: 45 }}
                  source={require('../assets/img/Quiz1.png')}
                />
                <Text style={styles.textBtn}>QUIZ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Image
                  style={{ width: 30, height: 45 }}
                  source={require('../assets/img/test1.png')}
                />
                <Text style={styles.textBtn}>TEST SERIES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Foundation
                  name="book-bookmark"
                  size={30}
                  color={colors.primary}
                />
                <Text style={styles.textBtn}>TRG Special</Text>
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
    color: '#dc3545',
  },
});
