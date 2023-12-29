import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { colors } from '../constants';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../utils/userContext';
import { checkIfBookmarked, fetchPaidMaterials, fetchPaidQuizes, fetchQuiz } from '../utils/APIs';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMaterial = () => {
  const navigation = useNavigation();
  const [paidMaterials, setPaidMaterials] = useState([]);
  const [paidQuizes, setPaidQuizes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const { user, downloads, setDownloads } = useUserContext();


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        // fetching paid materials
        const res = await fetchPaidMaterials(user?._id);
        const paidMaterials = await res.json();
        setPaidMaterials(paidMaterials)
        console.log(paidMaterials)

        // fetching paid quizes
        const res2 = await fetchPaidQuizes(user?._id)
        const paidQuizes = await res2.json();
        setPaidQuizes(paidQuizes)

        setIsLoading(false)

      } catch (error) {
        console.log(error)
        Alert.alert("You might be offline!")
      }
    }
    fetchData();
  }, [])

  const handleDownload = async (material) => {
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

  const navigateToTestDetails = async quizId => {
    try {
      const res = await fetchQuiz(quizId);
      const quizDetails = await res.json();

      // checking if already bookmarked
      const res2 = await checkIfBookmarked({ userId: user._id, materialId: quizId })
      const bookmarked = await res2.json()

      navigation.navigate('test_detail', { data: {...quizDetails, isPaid:false}, bookmarked });
    } catch (error) {
      console.log(error);
      Alert.alert('Error fetching quiz details...');
    }
  };


  return (
<<<<<<< HEAD
    <SafeAreaView style={{flex: 1}}>
      {/* In case of no downloads */}
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{color: '#0a0a0a'}}>No Materials(Paid)</Text>
      </View>
=======
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.title}>Paid Study Materials</Text>
        {paidMaterials.length === 0 ? <>{/* In case of no materials */}
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 100 }}>
            <Text style={{ color: '#0a0a0a' }}>No Materials(Paid)</Text>
          </View></>
          : isLoading ? <ActivityIndicator style={{ marginVertical: 40 }} />
            : paidMaterials.map((item) => {
              return <View key={item._id} style={{ marginHorizontal: 20, }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('pdf_screen', { uri: item?.pdfUrl })}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="book" size={30} color="#fff" />
                    <View>
                      <Text style={styles.titleText}> {item?.title}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                          <Text style={[styles.dateText, { opacity: 0.8 }]}>
                            {item?.course}
                          </Text>
                        </View>
                        <Text style={[styles.levelText, { opacity: 0.8 }]}>
                          {item?.type}
                        </Text>
                        <Text style={[styles.levelText, { opacity: 0.9 }]}>
                          {item?.difficultyLevel}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => { handleDownload(item) }}>
                    <FAIcon name="download" size={25} color="white" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            })}

        {/* for spacing  */}
        <View style={{ marginBottom: 40 }}></View>

        <Text style={styles.title}>Paid Test Series</Text>
        {paidQuizes.length === 0 ? <>{/* In case of no quizes */}
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 100 }}>
            <Text style={{ color: '#0a0a0a' }}>No Quizes(Paid)</Text>
          </View></>
          : isLoading ? <ActivityIndicator style={{ marginVertical: 40 }} />
            : paidQuizes.map((item) => {
              return <View key={item._id} style={{ marginHorizontal: 20, }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigateToTestDetails(item?._id);
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="calendar" size={30} color="#fff" />
                    <View>
                      <Text style={styles.titleText}> {item?.title}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                          <Text style={[styles.dateText, { opacity: 0.8 }]}>
                            Posted on:
                          </Text>
                          <Text style={styles.dateText}>
                            {item?.createdAt.substring(0, 10)}
                          </Text>
                        </View>
                        <Text style={[styles.levelText, { opacity: 0.8 }]}>Level:</Text>
                        <Text style={[styles.levelText, { opacity: 0.9 }]}>
                          {' '}
                          {item?.difficultyLevel}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            })}
      </ScrollView>

>>>>>>> 8e9535acda69fada601e4d088b3aae662a39d018
    </SafeAreaView>
  );
};

export default MyMaterial;

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
  title: {
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textColor,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: 'black',
  },
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
  dateText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    opacity: 0.9,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  levelText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold',
  },
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
