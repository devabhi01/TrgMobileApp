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
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { checkIfBookmarked, fetchBookmarks, fetchQuiz } from '../utils/APIs';
import { useUserContext } from '../utils/userContext';
import { ScrollView } from 'react-native-gesture-handler';

const Bookmarks = () => {
  const navigation = useNavigation();
  const { user } = useUserContext();
  const [materialBookmarks, setMaterialBookmarks] = useState([]);
  const [quizBookmarks, setQuizBookmarks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchBookmarks(user?._id);
        const bookmarks = await res.json();
        setMaterialBookmarks(bookmarks?.materialBookmarks);
        setQuizBookmarks(bookmarks?.quizBookmarks);
      } catch (error) {
        console.log(error)
        Alert.alert("You might be offline!")
      }
    }
    fetchData();
  }, [])

  const navigateToModal = async (material) => {
    try {
      // checking if already bookmarked
      const res = await checkIfBookmarked({ userId: user._id, materialId: material?._id })
      const bookmarked = await res.json()
      navigation.navigate('material_modal', { data: material, bookmarked });
    } catch (error) {
      console.log(error)
    }
  }

  const navigateToTestDetails = async quizId => {
    try {
      const res = await fetchQuiz(quizId);
      const quizDetails = await res.json();

      // checking if already bookmarked
      const res2 = await checkIfBookmarked({ userId: user._id, materialId: quizId })
      const bookmarked = await res2.json()

      navigation.navigate('test_detail', { data: quizDetails, bookmarked });
    } catch (error) {
      console.log(error);
      Alert.alert('Error fetching quiz details...');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.title}>Study Materials</Text>
        {materialBookmarks.map((bookmark) => {
          return <View style={{ marginHorizontal: 20, marginBottom: 20 }} key={bookmark?.material?._id} >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToModal(bookmark?.material)}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="calendar" size={30} color="#fff" />
                <View>
                  <Text style={styles.titleText}> {bookmark?.material?.title}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                      <Text style={[styles.dateText, { opacity: 0.8 }]}>
                        Bookmarked At : {bookmark?.bookmarkedAt.substring(0, 10)}
                      </Text>
                      <Text style={[styles.levelText, { opacity: 0.9 }]}>
                        {bookmark?.material?.difficultyLevel}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

            </TouchableOpacity>
          </View>
        })}

        <Text style={styles.title}>Test Series</Text>
        {quizBookmarks.map((bookmark) => {
          return <View style={{ marginHorizontal: 20, marginBottom: 20 }} key={bookmark?.quiz?._id} >
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigateToTestDetails(bookmark?.quiz?._id);
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="calendar" size={30} color="#fff" />
                <View>
                  <Text style={styles.titleText}> {bookmark?.quiz?.title}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                      <Text style={[styles.dateText, { opacity: 0.8 }]}>
                        Bookmarked At : {bookmark?.bookmarkedAt?.substring(0, 10)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({

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
    // marginLeft: 5,
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
