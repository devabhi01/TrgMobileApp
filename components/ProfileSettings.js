import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Linking
} from 'react-native';
import React, { useState } from 'react';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';


import { colors } from '../constants';
import Avatar from '../assets/img/user.png'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



const ProfileSettings = () => {
  const [profile, setProfile] = useState(null)

  const ImgPick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setProfile(image.path)
    });
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        <View style={styles.container}>
          <View style={styles.wraper}>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.Avatar_img}
                size={80}
                source={profile ? { uri: profile } : Avatar}

              />
              <TouchableOpacity onPress={ImgPick} style={styles.CamPick}>
                <Ionicon name="camera" size={20} color={colors.primary} />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  color: colors.primary,
                  fontSize: 25,
                  fontWeight: 500,
                }}>
                Abhishek
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <View style={styles.InfoDetail}>
                <Ionicon name="location" size={24} color={colors.primary} />
                <Text style={styles.TextInfo}>Delhi, India</Text>
              </View>
              <View style={styles.InfoDetail}>
                <Icon name='phone' size={24} color={colors.primary} />
                <Text style={styles.TextInfo}>+91 7290901622</Text>
              </View>
              <View style={styles.InfoDetail}>
                <Icon name='email' size={24} color={colors.primary} />
                <Text style={styles.TextInfo}>a1abhishek2016@gmail.com</Text>
              </View>
              <View style={styles.InfoDetail}>
                <Image source={require('../assets/img/dob.png')} color={'#dc3545'} style={{ width: 24, height: 24, }} />
                <Text style={styles.TextInfo}>12 January 2003</Text>
              </View>

            </View>
            <View style={{ height: 2, backgroundColor: colors.primary }}>

            </View>
            <TouchableOpacity style={styles.btn}>
              <Icon name="account-edit" size={25} color={colors.primary} />
              <Text style={styles.btnText}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <MaterialIcon name="payment" size={25} color={colors.primary} />
              <Text style={styles.btnText}>Payment Details</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.btn}>
              <MaterialIcon name="contact-support" size={25} color={colors.primary} />
              <Text style={styles.btnText}>Support</Text>
            </TouchableOpacity> */}
            <View style={{ marginVertical: 30 }}>
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
                  onPress={() => Linking.openURL('https://www.instagram.com/therightguru/')}
                  style={{ marginHorizontal: 10 }}>
                  <Ionicon
                    name="logo-instagram"
                    size={30}
                    color={colors.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://www.facebook.com/people/The-Right-Guru/100063461899383/')}
                  style={{ marginHorizontal: 10 }}>
                  <Ionicon
                    name="logo-facebook"
                    size={30}
                    color={colors.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://www.linkedin.com/company/the-right-guru/')}
                  style={{ marginHorizontal: 10 }}>
                  <Ionicon
                    name="logo-linkedin"
                    size={30}
                    color={colors.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://twitter.com/The_Right_Guru')}
                  style={{ marginHorizontal: 10 }}>
                  <Ionicon name="logo-twitter" size={30} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wraper: {
    marginTop: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.graylight,
    paddingHorizontal: 20,
    paddingBottom: 200
  },

  Avatar_img: {
    marginTop: -50,
    borderWidth: 5,
    borderRadius: 50,
    width: 90,
    height: 90,
    borderColor: '#dc3545',
  },
  InfoDetail: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  TextInfo: {
    paddingLeft: 20,
    color: colors.primary,
    fontSize: 16,

  },
  btn: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnText: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: colors.primary,
  },
  CamPick: {
    alignSelf: 'flex-end',
    marginTop: -35
  }

});