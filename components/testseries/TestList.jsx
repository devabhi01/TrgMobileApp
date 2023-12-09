import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../../constants';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {fetchQuiz} from '../../utils/APIs';

const TestList = ({route}) => {
  const navigation = useNavigation();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const quizes = route.params?.data || [];
  // console.log(quizes)

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const navigateToTestDetails = async quizId => {
    try {
      const res = await fetchQuiz(quizId);
      const quizDetails = await res.json();
      navigation.navigate('test_detail', {data: quizDetails});
    } catch (error) {
      console.log(error);
      Alert.alert('Error fetching quiz details...');
    }
  };

  const renderQuizItem = ({item}) => (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigateToTestDetails(item?._id);
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="calendar" size={30} color="#fff" />
          <View>
            <Text style={styles.titleText}> {item?.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text style={[styles.dateText, {opacity: 0.8}]}>
                  Posted on:
                </Text>
                <Text style={styles.dateText}>
                  {item?.createdAt.substring(0, 10)}
                </Text>
              </View>
              <Text style={[styles.levelText, {opacity: 0.8}]}>Level:</Text>
              <Text style={[styles.levelText, {opacity: 0.9}]}>
                {' '}
                {item?.difficultyLevel}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <TouchableOpacity onPress={toggleBookmark}>
            {isBookmarked ? (
              <Icon name="bookmarks" size={20} color="#fff" />
            ) : (
              <Icon name="bookmarks-outline" size={20} color="#fff" />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <FAIcon name="download" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* quiz list  */}
      <FlatList
        data={quizes}
        keyExtractor={item => item?._id}
        renderItem={renderQuizItem}
      />
    </SafeAreaView>
  );
};

export default TestList;

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
});
