import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Share,
  Modal,
  TouchableWithoutFeedback,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnnouncmentIcon from './announcement.png';
import {useNavigation} from '@react-navigation/native';

const HeaderThreeDots = props => {
  const navigation = useNavigation();

  const [isClicked, setIsClicked] = useState(false);

  // Share Button Functionality
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Download the App on Playstore : https://play.google.com/store/apps/details?id=com.trgmobileapp',
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

  // opening on playstore
  const openPlayStore = () => {
    Linking.openURL('market://details?id=com.trgmobileapp')
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={{marginRight: 20, flexDirection: 'row'}}>
      <TouchableOpacity style={{marginRight: 10}} onPress={() => {navigation.navigate('announcement')}}>
        <Image source={AnnouncmentIcon} style={{height: 24, width: 24}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <Icon name="dots-vertical" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isClicked}
        animationType="fade"
        onRequestClose={() => setIsClicked(false)}>
        <TouchableWithoutFeedback onPress={() => setIsClicked(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity style={{marginBottom: 15}} onPress={openPlayStore} >
                  <Text style={{color: '#0a0a0a', fontSize: 16}}>Rate App</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginBottom: 15}}
                  onPress={() => onShare()}>
                  <Text style={{color: '#0a0a0a', fontSize: 16}}>
                    Share App
                  </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => navigation.navigate('helpsupport')}>
                  <Text style={{color: '#0a0a0a', fontSize: 16}}>
                    Contact Us
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default HeaderThreeDots;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    alignItems: 'flex-end', // Align items to the right
  },
  modalContainer: {
    marginTop: 10, // Adjust top margin for positioning
    marginRight: 10, // Adjust right margin for positioning
    width: 150,
    height: 'auto',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 5,
  },
});
