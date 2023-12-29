import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../../utils/userContext';

export default function TestDetail({ route }) {
  //user context
  const { quizData } = useUserContext();
  const navigation = useNavigation();
  // taking all data here
  const questionsData = route.params?.data || {};

  const currentDate = new Date().toDateString();

  const [decisionArr, setDecisionArr] = useState([])
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)

  const translateY = useSharedValue(500); // Initial position off the screen

  // Animation to move the component from bottom to top
  translateY.value = withTiming(0, {
    duration: 500,
    easing: Easing.out(Easing.exp),
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  // function to get array of 0s and 1s i.e. correct or not
  const calculateMarksArray = (questions) => {
    return questions.map((question) => {
      return question.options[question.marked - 1] === question.answer ? 1 : 0;
    });
  };

  // to count correct ans
  const countCorrectAnswers = (marksArray) => {
    return marksArray.reduce((total, mark) => total + mark, 0);
  };

  // to count wrong ans
   const countWrongAnswers = (marksArray) => {
    return marksArray.reduce((total, mark) => total + (mark === 0 ? 1 : 0), 0);
  };

  useEffect(() => {
    const checking = async () => {
      const arr = await calculateMarksArray(questionsData);
      setDecisionArr(arr)

      console.log(decisionArr)

      //count correct ones
      setCorrectCount(await countCorrectAnswers(arr))
      // count wrong ones
      setWrongCount(await countWrongAnswers(arr))
    }

    checking()
  }, [])


  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#595959',
              textAlign: 'center',
            }}>
            {currentDate}
          </Text>

          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: '700',
              color: '#595959',
              textAlign: 'center',
            }}>
            Class: {quizData?.class}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: '700',
              color: '#595959',
              textAlign: 'center',
            }}>
            Subject: {quizData?.subject}
          </Text>
          <View
            style={{
              marginTop: 30,
              width: '100%',
              backgroundColor: '#595959',
              height: 1.5,
              opacity: 0.3,
            }}
          />

          <View>
            <Text style={{ color: '#000', fontSize: 16, marginTop: 20 }}>
              Maximum Marks :
              <Text
                style={{
                  color: 'green',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                {quizData?.totalMarks}
              </Text>
            </Text>
            <Text style={{ color: '#000', fontSize: 16 }}>
              Obtained Marks :
              <Text
                style={{
                  color: 'green',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                { correctCount*(quizData?.markForEach)}
              </Text>
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 30,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[
                  styles.answers,
                  { backgroundColor: 'green', width: 30, height: 30 },
                ]}>
                {correctCount}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#595959' }}>
                {'  '} : Correct Answer
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.answers,
                  { backgroundColor: 'red', width: 30, height: 30 },
                ]}>
                {wrongCount}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#595959' }}>
                {'  '} : Wrong Answer
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              width: '100%',
              backgroundColor: '#595959',
              height: 1.5,
              opacity: 0.3,
            }}
          />
        </View>

        <View style={styles.answerContainer}>
          {decisionArr.map((isCorrect, index)=>{return <Text
            key={index}
            style={[
              styles.answers,
              {
                backgroundColor: isCorrect === 1 ? 'green' : 'red',
              },
            ]}>
            {index+1}
          </Text>})}
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { navigation.navigate('TestSeries') }}>
          <Text style={{ fontSize: 18, color: '#fafafafa' }}>Go to TestSeries</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
    gap: 30,
  },
  answers: {
    width: 50,
    height: 50,
    color: '#fff',
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#dc3545',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    marginTop: 80,
  },
});
