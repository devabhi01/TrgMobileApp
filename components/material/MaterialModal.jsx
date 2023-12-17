import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import { addRemoveBookmark, buyMaterial, createPaymentIntent } from '../../utils/APIs';
import { useUserContext } from '../../utils/userContext';
import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStripe } from '@stripe/stripe-react-native';

const MaterialModal = ({ navigation, route }) => {
  const { user, downloads, setDownloads } = useUserContext();
  // material details
  const material = route.params?.data || {};
  const bookmarked = route.params?.bookmarked;

  // console.log(bookmarked, material);
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isDisabled, setIsDisabled] = useState(false);

  //payment inits
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  // const [loading, setLoading] = useState(false);

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
          notification: true,
          path: filePath,
        },
      }).fetch('GET', material?.pdfUrl);

      //saving downloaded material in user context and async store
      const materialWithPath = { ...material, pdfUrl: filePath }
      await AsyncStorage.setItem('downloads', JSON.stringify([...downloads, materialWithPath]));
      setDownloads([...downloads, materialWithPath])

      // console.log('File downloaded:', response);
      Alert.alert('File Downloaded!', 'Your download are available now in My Downloads');
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert("Error while downloading...")
    }
  };


  // checkout function
  const handleCheckout = async (material) => {
    try {
      console.log("payment initialted...")
      // creating payment intend
      const price = material?.price
      const res = await createPaymentIntent({ amount: Math.floor(price * 100), userId:user?._id, materialId:material?._id })
      const data = await res.json()
      // console.log(material?.price, data)

      //initializing payment sheet
      const { error } = await initPaymentSheet({
        merchantDisplayName: "The Right Guru",
        // customerId: customer,
        // customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: data.paymentIntent,
        // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
        //methods that complete payment after a delay, like SEPA Debit and Sofort.
        allowsDelayedPaymentMethods: true,
        // defaultBillingDetails: {
        //   name: user?.name,
        // },
        // googlePay:{
        //   merchantCountryCode:'IND',
        //   testEnv:true,
        //   currencyCode:'INR'
        // }
      });
      // console.log(error)

      if (!error) {
        // presenting payment sheet
        // setLoading(true);
        const errRes = await presentPaymentSheet();
        if (errRes) {
          // Alert.alert("Payment flow was intrupted ;(");
          // return;
        }
      }

      // adding paid material to user account
      // const res2 = await buyMaterial({ userId: user._id, materialId: material?._id })
      //go back
      // Alert.alert("Payment Success!", "Your material is added to my material screen :)")
      navigation.goBack()

    } catch (error) {
      console.log(error)
      Alert.alert("Something went wrong...")
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
            height: '40%',
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

          <View style={{ width: "100%", marginHorizontal: 30, marginVertical: 10 }}>
            <Text>Name : {material?.title}</Text>
            <Text>Description : {material?.description}</Text>
            <Text>Price : {material?.price}Rs</Text>
            <Text></Text>
            <Text>Note: Material is added to my material screen after successful payment :)</Text>
          </View>


          {material?.isPaid ? <TouchableOpacity
            onPress={() => {
              handleCheckout(material)
            }}>
            <Text style={styles.openBtn}>Buy</Text>
          </TouchableOpacity> : <TouchableOpacity
            onPress={() => {
              navigation.navigate('pdf_screen', { uri: material?.pdfUrl });
            }}>
            <Text style={styles.openBtn}>Open</Text>
          </TouchableOpacity>}
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
