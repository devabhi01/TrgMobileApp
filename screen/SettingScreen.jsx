import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import Fa5 from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants';

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.dark}}>
      <ScrollView style={{marginHorizontal: 10}}>
        <View>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: colors.bg,
                width: 60,
                height: 60,
                borderRadius: 50,
              }}></View>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontSize: 20,
                fontWeight: 600,
              }}>
              Abhishek
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <IonIcon name="lock-closed" size={24} colors="#dc3545" />
            <Text style={styles.btnText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <IonIcon name="notifications" size={24} colors="#dc3545" />
            <Text style={styles.btnText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <IonIcon name="key" size={24} colors="#dc3545" />
            <Text style={styles.btnText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image
              style={{width: 22, height: 22}}
              color={'#eee'}
              source={require('../assets/img/help.png')}
            />
            <Text style={styles.btnText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <IonIcon name="cloud-download" size={24} colors="#dc3545" />
            <Text style={styles.btnText}>Storage & Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image
              style={{width: 22, height: 22}}
              color={'#eee'}
              source={require('../assets/img/friends.png')}
            />
            <Text style={styles.btnText}>Invite a friend</Text>
          </TouchableOpacity>
          <View style={{marginVertical: 10}}>
            <Text style={{textAlign: 'center', fontSize: 18, color: '#eee'}}>
              Follow us
            </Text>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: 20,
              }}>
              <TouchableOpacity style={{marginHorizontal: 10}}>
                <IonIcon name="logo-instagram" size={30}  />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10}}>
                <IonIcon name="logo-facebook" size={30}  />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10}}>
                <IonIcon name="logo-linkedin" size={30}  />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10}}>
                <IonIcon name="logo-twitter" size={30}  />
              </TouchableOpacity>
            </View>
          </View>
          {/* <Text
            style={{
              textAlign: 'center',
              paddingVertical: 50,
              fontSize: 25,
              color: '#dc3545',
              fontWeight: 600,
            }}>
            TRG
          </Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  btnText: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#eee',
  },
});
