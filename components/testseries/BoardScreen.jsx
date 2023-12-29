import {
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {colors} from '../../constants';
import QuestionItem from './QuestionItem';
import {useNavigation} from '@react-navigation/native';
import Timer from '../courses/template/Timer';

const BoardScreen = ({route}) => {
  const navigation = useNavigation();
  // getting questions for quiz
  const questionsData = route.params?.data || {};

  const {height, width} = Dimensions.get('window');

  const [currentTime, setCurrentTime] = useState(600);
  const [timerRunning, setTimerRunning] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [questions, setQuestions] = useState(questionsData);

  const listRef = useRef();



  const OnSelectOption = (index, x) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = prevQuestions.map((item, ind) => {
        if (index === ind) {
          return { ...item, marked: item.marked === x ? -1 : x };
        }
        return item;
      });
      return updatedQuestions;
    });
  };
  

  // const getResults = () => {
  //   return questions.reduce((marks, item) => {
  //     return marks + (item.marked === item.correct ? 1 : 0);
  //   }, 0);
  // };

  const resetTest = () => {
    const tempData = questions;
    tempData.map((item, ind) => {
      item.marked = -1;
    });
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setQuestions(temp);
    
  };

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(interval);
            setTimerRunning(false);

            // Auto-submit and navigate to the test result here
            
            navigation.navigate('test_result',{data:questions});

            // Additional logic for submission if needed
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={[styles.subject, {color: '#595959'}]}>
            Time Remaining : <Timer initialTime={currentTime} fontSize={16} />
          </Text>
          <Text
            style={{
              color: colors.gray,
              marginRight: 20,
              fontSize: 16,
              fontWeight: '600',
            }}
            onPress={() => {
              resetTest();
              listRef.current.scrollToIndex({animated: true, index: 0});
            }}>
            Reset
          </Text>
        </View>

        <Text style={{color: colors.textColor, fontSize: 16, marginLeft: 20}}>
          Question : {' ' + currentIndex + '/' + questionsData.length}
        </Text>
        <View style={{marginTop: -10}}>
          <FlatList
            keyExtractor={item => item?._id}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={listRef}
            horizontal
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x / width;
              setCurrentIndex((x + 1).toFixed(0));
            }}
            data={questions}
            renderItem={({item, index}) => {
              return (
                <QuestionItem
                  data={item}
                  selectedOption={x => {
                    OnSelectOption(index, x);
                  }}
                />
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            bottom: 50,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: currentIndex > 1 ? 'purple' : 'gray',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              if (currentIndex > 1) {
                listRef.current.scrollToIndex({
                  index: currentIndex - 2,
                  animated: true,
                });
              }
            }}>
            <Text style={{color: 'white', fontSize: 14}}>Previous</Text>
          </TouchableOpacity>
          {currentIndex == questions.length ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#dc3545',
                height: 50,
                width: 100,
                borderRadius: 10,
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                
                navigation.navigate('test_result',{data:questions},{data:questions});
              }}>
              <Text style={{color: 'white', fontSize: 14}}>Submit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: 'purple',
                height: 50,
                width: 100,
                borderRadius: 10,
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if (questions[currentIndex - 1].marked !== -1) {
                  if (currentIndex < questions.length) {
                    listRef.current.scrollToIndex({
                      animated: true,
                      index: currentIndex,
                    });
                  }
                }
              }}>
              <Text style={{color: 'white', fontSize: 14}}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
        
      </View>
    </View>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
  },
  wraper: {
    flex: 1,
    borderRadius: 10,
  },
  subject: {
    fontSize: 16,
    color: '#0a0a0a',
    fontWeight: '600',
    textAlign: 'left',

    marginLeft: 20,
    marginBottom: 20,
  },
});
