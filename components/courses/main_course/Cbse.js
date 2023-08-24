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
import Fa6 from 'react-native-vector-icons/FontAwesome6';

const Cbse = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        <Image style={styles.img} source={require('../img/cbse_pos.png')} />
        <View style={styles.container}>
          <View style={{paddingHorizontal: 30}}>
            <View style={{marginVertical: 10}}>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-4.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-5.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-6.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-7.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-8.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-9.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-10.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width:30, height: 30}}
                  source={require('../img/number-11.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
              <Image
                  style={{width: 30, height: 30}}
                  source={require('../img/number-12.png')}
                />
                <Text style={styles.textBtn}>Class</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
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
