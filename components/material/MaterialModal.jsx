import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {
  addRemoveBookmark,
  createOrder,
} from '../../utils/APIs';
import { useUserContext } from '../../utils/userContext';
import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';
import {RAZORPAY_KEY_ID} from '@env'

const MaterialModal = ({ navigation, route }) => {
  const { user, downloads, setDownloads } = useUserContext();
  // material details
  const material = route.params?.data || {};
  const bookmarked = route.params?.bookmarked;

  // console.log(bookmarked, material);
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleBookmark = async () => {
    try {
      // console.log(isBookmarked)
      setIsDisabled(!isDisabled);
      // updating bookmark in db
      await addRemoveBookmark({ userId: user._id, materialId: material?._id });
      setIsBookmarked(!isBookmarked);
      setIsDisabled(false);
    } catch (error) {
      console.log(error);
      Alert.alert(error);
    }
  };

  const handleDownload = async () => {
    try {
      const { fs } = RNFetchBlob;
      const rootDir = fs.dirs.DownloadDir;
      const folderName = 'TheRightGuru';
      const folderPath = `${rootDir}/${folderName}`;
      const filePath = `${folderPath}/${material?.title}`; // Path to the file to be downloaded
      // console.log(filePath)

      // Check if the folder exists, create it if it doesn't
      const folderExists = await fs.isDir(folderPath);
      if (!folderExists) {
        await fs.mkdir(folderPath);
      }

      // Perform the file download
      const response = await RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: false,
          path: filePath,
        },
      }).fetch('GET', material?.pdfUrl);

      //saving downloaded material in user context and async store
      const materialWithPath = { ...material, pdfUrl: filePath };
      await AsyncStorage.setItem(
        'downloads',
        JSON.stringify([...downloads, materialWithPath]),
      );
      setDownloads([...downloads, materialWithPath]);

      // console.log('File downloaded:', response);
      Alert.alert(
        'File Downloaded!',
        'Your download are available now in My Downloads',
      );
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error while downloading...');
    }
  };

  // checkout function
  const handleCheckout = async (material) =>{
    try {
      // creating payment order
      const price = material?.price;
      const res = await createOrder({
        amount: Math.floor(price * 100),
        userId: user?._id,
        materialId: material?._id,
      });
      const data = await res.json();

      // proceeding with payment for orderId
      var options = {
        description: material?.description,
        image: {uri:require('../../assets/img/trgIcon.png')},
        currency: 'INR',
        key: RAZORPAY_KEY_ID,
        amount: material?.price*100,
        name: 'The Right Guru',
        order_id: data.order.id,
        prefill: {
          email: user?.email,
          contact: user?.phoneNo,
          name: user?.name
        },
        theme: {color: '#ff0000'},
        notes: data.order.notes,
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        navigation.navigate('my_material');
      }).catch((error) => {
        // handle failure
        console.log(`Error: ${error.code} | ${error.description}`);
        Alert.alert(`Something went wrong`);
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong...');
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        navigation.goBack();
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '90%',
            height: 'auto',
            borderRadius: 8,
            position: 'relative',
            paddingBottom: 20,
          }}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 20,
              textAlign: 'center',
              marginTop: 20,
            }}>
            Materials Details
          </Text>

          <View
            style={{
              position: 'absolute',
              right: 15,
              top: 10,
              backgroundColor: '#dc3545',
              padding: 2,
              borderRadius: 50,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="close" size={25} color="#fff" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
              marginHorizontal: 20,
              padding: 20,
            }}>
            <TouchableOpacity onPress={toggleBookmark} disabled={isDisabled}>
              {isBookmarked ? (
                <Icon name="bookmarks" size={25} color="red" />
              ) : (
                <Icon name="bookmarks-outline" size={25} color="red" />
              )}
            </TouchableOpacity>
            {!material?.isPaid && <TouchableOpacity onPress={handleDownload}>
              <FAIcon name="download" size={25} color="red" />
            </TouchableOpacity>}
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginBottom: 20,
              gap: 5,
            }}>
            <Text style={{ color: colors.textColor }}>
              Material name : {material?.title}
            </Text>
            <Text style={{ color: colors.textColor }}>
              Class : {material?.class}
            </Text>
            <Text style={{ color: colors.textColor }}>
              Description : {material?.description}
            </Text>

            {material?.isPaid && (<>
              <Text style={{ color: colors.textColor }}>
                Price : <IconFA name="rupee" size={13} color="#000" />{' '}
                {material?.price}
              </Text>
              <Text style={{ color: colors.textColor, flexWrap: 'wrap' }}>
                Note : Material will added to my materials screen after successful
                payment :
              </Text></>)}
          </View>

          {material?.isPaid ? (
            <TouchableOpacity
              onPress={() => {
                handleCheckout(material);
              }}>
              <Text style={styles.openBtn}>Buy</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('pdf_screen', { uri: material?.pdfUrl });
              }}>
              <Text style={styles.openBtn}>Open</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  openBtn: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default MaterialModal;
