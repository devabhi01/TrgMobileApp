import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {colors} from '../constants';
import CbseSVG from '../assets/img/cbse.svg';

const CourseScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        
        <View style={styles.container}>
          <View style={{paddingHorizontal: 30}}>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('cbse')}
                style={styles.btn}>
                <CbseSVG style={{width: 30, height: 30}} />
                <Text style={styles.textBtn}>CBSE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('icse')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 45}}
                  source={require('../assets/img/icse1.png')}
                />
                <Text style={styles.textBtn}>ICSE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ssc')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/img/ssc1.png')}
                />
                <Text style={styles.textBtn}>SSC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('cuet')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 35}}
                  source={require('../assets/img/cuet1.png')}
                />
                <Text style={styles.textBtn}>CUET</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('clat')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 40}}
                  source={require('../assets/img/clat1.png')}
                />
                <Text style={styles.textBtn}>CLAT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('dsssb')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 45}}
                  source={require('../assets/img/dsssb1.png')}
                />
                <Text style={styles.textBtn}>DSSSB</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('police')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/img/police1.png')}
                />
                <Text style={styles.textBtn}>POLICE SERVICES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('other_comp')}
                style={styles.btn}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/img/other1.png')}
                />
                <Text style={styles.textBtn}>OTHER SERVICES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
  container: {
    backgroundColor: colors.graylight,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btn: {
    marginVertical: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
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
