import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Share,
  Linking,
} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import React from 'react';
import trgIcon from '../assets/img/trgIcon.png';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors } from '../constants';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingScreen = (props) => {
  // taking context to clear on logout
  const { setUser, setJwtoken, user } = useUserContext();

  //Linking to social Handle

  // Share Button Functionality

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share the The Right Gure Learning App',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // logging out
  const handleLogout = async () => {
    try {
      //clearing storage
      await AsyncStorage.clear();
      //clearing global data
      setUser(null);
      setJwtoken('');
    } catch (e) {
      console.log('Error : ', e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('profile_setting')}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 3,
                borderColor: colors.graylight,
                borderRadius: 100,
              }}>
              <Avatar.Image
                size={60}
                source={
                  user?.profilePic
                    ? { uri: user?.profilePic }
                    : require('../assets/img/user.png')
                }
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 20,
                fontSize: 20,
                fontWeight: 600,
                color: colors.primary,
              }}>
              {user.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('account_privacy')}
            style={styles.btn}>
            <IonIcon name="lock-closed" size={24} color={colors.primary} />
            <Text style={styles.btnText}>Account & Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openSettings()}
            style={styles.btn}>
            <IonIcon name="settings" size={24} color={colors.primary} />
            <Text style={styles.btnText}>App settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('helpsupport')}
            style={styles.btn}>
            <Image
              style={{ width: 22, height: 22 }}
              color={'#dc3545'}
              source={require('../assets/img/help.png')}
            />
            <Text style={styles.btnText}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onShare} style={styles.btn}>
            <Image
              style={{ width: 22, height: 22 }}
              color={'#eee'}
              source={require('../assets/img/friends.png')}
            />
            <Text style={styles.btnText}>Invite a friend</Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'center', marginVertical: 30 }}>
            <Button
              mode="outlined"
              textColor="#dc3545"
              rippleColor={'#dc3545'}
              onPress={handleLogout}
              style={{
                width: 200,
                borderWidth: 2,
                borderColor: '#dc3545',
                borderRadius: 10,
              }}>
              Logout
            </Button>
          </View>


          <View style={{ marginVertical: 10 }}>
            <Image
              source={trgIcon}
              style={{ width: 100, height: 100, alignSelf: 'center' }}
              resizeMode="contain"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: colors.primary,
              }}>
              Follow us
            </Text>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginVertical: 20,
              }}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/therightguru/')
                }
                style={{ marginHorizontal: 10 }}>
                <IonIcon
                  name="logo-instagram"
                  size={30}
                  color={colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.facebook.com/people/The-Right-Guru/100063461899383/',
                  )
                }
                style={{ marginHorizontal: 10 }}>
                <IonIcon
                  name="logo-facebook"
                  size={30}
                  color={colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/company/the-right-guru/',
                  )
                }
                style={{ marginHorizontal: 10 }}>
                <IonIcon
                  name="logo-linkedin"
                  size={30}
                  color={colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://twitter.com/The_Right_Guru')
                }
                style={{ marginHorizontal: 10 }}>
                <IonIcon name="logo-twitter" size={30} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://t.me/therightguru',
                  )
                }
                style={{ marginHorizontal: 10 }}>
                <FontAwesome
                  name="telegram"
                  size={30}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* <Text
            style={{
              textAlign: 'center',
              paddingVertical: 25,
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
    color: colors.primary,
  },
});
