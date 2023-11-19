import React, { useState } from 'react';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUser } from '../utils/APIs';

  // // user context
  // const { user, setUser, jwtoken } = useUserContext()
  // // progress
  // const [uploadProgress, setUploadProgress] = useState(0);
  // const [showProgress, setShowProgress] = useState(false);

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