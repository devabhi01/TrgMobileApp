import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../constants';
import React from 'react';
import FAIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToastManager, {Toast} from 'toastify-react-native';

const Downloads = () => {
  const navigation = useNavigation();
  const {downloads, setDownloads} = useUserContext();

  const handleDelete = async material => {
    try {
      const newDownloads = downloads.filter(item => item._id !== material._id);
      await AsyncStorage.setItem('downloads', JSON.stringify(newDownloads));
      setDownloads(newDownloads);
      Toast.success('Material deleted from downloads');
    } catch (error) {
      Toast.error(error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ToastManager height={55} width={'auto'} />
      {downloads.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#0a0a0a'}}>No Downloads</Text>
        </View>
      ) : (
        downloads.map(material => {
          return (
            <View style={{margin: 20, marginBottom: 0}} key={material?._id}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('pdf_screen', {uri: material?.pdfUrl});
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.subjectText}>{material?.title}</Text>
                  <Text style={styles.descText}>
                    {material?.type} - Class : {material?.class}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDelete(material);
                    }}>
                    <FAIcon name="delete" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </SafeAreaView>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 5,
  },
  subjectText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  descText: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 12,
    marginLeft: 5,
  },
});
