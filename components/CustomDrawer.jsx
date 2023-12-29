import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants';
import trgIcon from '../assets/img/trgIcon.png';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconIo from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { updateUser } from '../utils/APIs';
// import Avatar from 'react-native-paper/lib/typescript/components/Avatar/AvatarIcon';
import ToastManager, { Toast } from 'toastify-react-native';


const { width, height } = Dimensions.get('screen');

const CustomDrawer = props => {
  const navigation = useNavigation();

  const { setUser, setJwtoken, user, jwtoken } = useUserContext();
  // progress
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

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

        Toast.success('Image updated !')
      }
      else {
        throw new Error(data?.msg || "Something went wrong!")
      }
    } catch (e) {
      console.log("Error : ", e)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.graylight, marginTop: -10 }}>
      <ToastManager height={55} width={'auto'} />
      <DrawerContentScrollView {...props} >
        <TouchableOpacity onPress={ImgPickAndUpload} >
          <Image
            style={styles.userImg}
            source={user?.profilePic ? { uri: user?.profilePic } : require('../assets/img/person.jpg')}
          /></TouchableOpacity>
        <View style={styles.drawerList}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('profile_setting')}>
            <IconFA name="user-circle" size={25} color={colors.graylight} />
            <Text style={styles.btnText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('downloads')}>
            <IconFA name="download" size={20} color={colors.graylight} />
            <Text style={styles.btnText}>Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('doubt_clearence')}>
            <IconFA name="question" size={22} color={colors.graylight} />
            <Text style={styles.btnText}>Doubt CLearence</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('my_material')}>
            <IconIo name="cloud-download" size={25} color={colors.graylight} />
            <Text style={styles.btnText}>My Materials(Paid)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('bookmarks')}>
            <Icon name="bookmark" size={25} color={colors.graylight} />
            <Text style={styles.btnText}>My Bookmarks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('setting_screen')}>
            <IconIo name="settings" size={25} color={colors.graylight} />
            <Text style={styles.btnText}>Setting</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Icon name="logout" size={25} color={colors.primary} />
            <Text style={[styles.btnText, { color: colors.primary }]}>Logout</Text>
          </TouchableOpacity>

          <View
            style={{
              borderColor: colors.gray,
              width: '90%',
              borderWidth: 0.5,
              alignSelf: 'center',
              marginVertical: 20,
            }}
          />

          <View style={{ marginVertical: 10 }}>
            <Image
              source={trgIcon}
              style={{ width: 130, height: 130, alignSelf: 'center' }}
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
                <IconIo
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
                <IconIo
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
                <IconIo
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
                <IconIo name="logo-twitter" size={30} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://t.me/therightguru',
                  )
                }
                style={{ marginHorizontal: 10 }}>
                <IconFA
                  name="telegram"
                  size={30}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: colors.graylight,
    left: width / 2 - 100,
    bottom: -35,
    borderWidth: 3,
  },
  drawerList: {
    marginTop: 100 / 2 + 10,
  },
  btn: {
    width: '90%',
    borderRadius: 5,
    height: 45,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  logoutBtn: {
    width: '90%',
    borderRadius: 5,
    height: 45,
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: colors.primary,
    borderStyle: 'solid',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  btnText: {
    color: colors.graylight,
    marginLeft: 10,
    fontSize: 18,
  },
});
