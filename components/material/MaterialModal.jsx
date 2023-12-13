import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {addRemoveBookmark} from '../../utils/APIs';
import {useUserContext} from '../../utils/userContext';
import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';

const MaterialModal = ({navigation, route}) => {
  const {user} = useUserContext();
  // material details
  const material = route.params?.data || {};
  const bookmarked = route.params?.bookmarked;

  console.log(bookmarked, material);
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleBookmark = async () => {
    try {
      // console.log(isBookmarked)
      setIsDisabled(!isDisabled);
      // updating bookmark in db
      await addRemoveBookmark({userId: user._id, materialId: material?._id});
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
      const filePath = `${folderPath}/${material?.pdfFilename}`; // Path to the file to be downloaded
      
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
          notification: true,
          path: filePath,
        },
      }).fetch('GET', material?.pdfUrl);

      console.log('File downloaded:', response);
      Alert.alert('File Downloaded', 'Your file has been downloaded in TheRightGuru folder in your Downloads.');
    } catch (error) {
      console.error('Download error:', error);
    }
  };


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
            height: '50%',
            borderRadius: 8,
            position: 'relative',
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
            <TouchableOpacity onPress={handleDownload}>
              <FAIcon name="download" size={25} color="red" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('pdf_screen', {uri: material?.pdfUrl});
            }}>
            <Text style={styles.openBtn}>Open</Text>
          </TouchableOpacity>
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
