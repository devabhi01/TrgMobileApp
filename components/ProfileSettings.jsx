import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Linking,
  Alert,
  ToastAndroid
} from 'react-native';
import React, { useState } from 'react';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

import { colors } from '../constants';
import Avatar from '../assets/img/user.png'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUser } from '../utils/APIs';


const ProfileSettings = () => {

  // user context
  const { user, setUser, jwtoken } = useUserContext()
  // progress
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const ImgPickAndUpload = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true
      })
      const imgUrl = image.path;

      // path to existing file on filesystem
      // fileName = imgUrl.substring(imgUrl.lastIndexOf('/') + 1);
      const fileName = `${user.name}-${Date.now()}`
      // uploading the file
      setShowProgress(true)
      let uploadTask = storage().ref(fileName).putFile(imgUrl);
      
      uploadTask.on('state_changed', taskSnapshot => {
        setUploadProgress(Math.floor((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100))
      });
      
      await uploadTask;
      // generating https url
      const imgUri = await storage().ref(fileName).getDownloadURL();
      setShowProgress(false)
      
      // setting global context and local storage and database
      const res = await updateUser({ _id: user._id, profilePic: imgUri }, jwtoken);
      const data = await res.json()
      if (res.ok) {

        // async storing
        await AsyncStorage.setItem('user', JSON.stringify(data.response));

        // setting global variables
        setUser(data.response)

        Alert.alert('Congrats', 'Profile Image updated successfully!')
      }
      else {
        throw new Error(data?.msg || "Something went wrong!")
      }

    } catch (e) {
      console.log("Error : ", e)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        <View style={styles.container}>
          <View style={styles.wraper}>
            {showProgress? ToastAndroid.show(`${uploadProgress} uploaded`,ToastAndroid.SHORT) : null}
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.Avatar_img}
                size={80}
                source={user?.profilePic ? { uri: user?.profilePic } : Avatar}
              />
              <TouchableOpacity onPress={ImgPickAndUpload} style={styles.CamPick}>
                <Ionicon name="camera" size={20} color={colors.primary} />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  color: colors.primary,
                  fontSize: 25,
                  fontWeight: 500,
                }}>
                {user?.name}
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              {/* <View style={styles.InfoDetail}>
                <Ionicon name="location" size={24} color={colors.primary} />
                <Text style={styles.TextInfo}>{user?.address}</Text>
              </View> */}
              <View style={styles.InfoDetail}>
                <Icon name='phone' size={24} color={colors.primary} />
                <Text style={styles.TextInfo}>{user?.phoneNo}</Text>
              </View>
              <View style={styles.InfoDetail}>
                <Icon name='email' size={24} color={colors.primary} />
                <Text style={styles.TextInfo}>{user?.email}</Text>
              </View>
              <View style={styles.InfoDetail}>
                <Image source={require('../assets/img/dob.png')} color={'#dc3545'} style={{ width: 24, height: 24, }} />
                <Text style={styles.TextInfo}>{user?.dob.substring(0,10)} </Text>
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
              <Text style={styles.btnText}>Payment History</Text>
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
