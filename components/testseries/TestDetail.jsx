import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { colors } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
  addRemoveBookmark,
  createOrder,
} from '../../utils/APIs';
import { useUserContext } from '../../utils/userContext';
import RazorpayCheckout from 'react-native-razorpay';
import {RAZORPAY_KEY_ID} from '@env'

const TestDetail = props => {
  // user context
  const { user, setQuizData } = useUserContext();
  // quiz details
  const quiz = props.route.params?.data || {};
  const bookmarked = props.route.params?.bookmarked;

  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleBookmark = async () => {
    try {
      setIsDisabled(!isDisabled);
      // updating bookmark in db
      await addRemoveBookmark({ userId: user._id, materialId: quiz._id });
      setIsDisabled(false);
    } catch (error) {
      console.log(error);
      Alert.alert(error);
    }
    setIsBookmarked(!isBookmarked);
  };

  // checkout function
  const handleCheckout = async (quiz) => {
    try {
       // creating payment order
       const price = quiz?.price;
       const res = await createOrder({
         amount: Math.floor(price * 100),
         userId: user?._id,
         materialId: quiz?._id,
       });
       const data = await res.json();

      // proceeding with payment for orderId
      var options = {
        description: quiz?.description,
        image: {uri:require('../../assets/img/trgIcon.png')},
        currency: 'INR',
        key: RAZORPAY_KEY_ID,
        amount: quiz?.price*100,
        name: 'The Right Guru',
        order_id: data.order.id,
        prefill: {
          email: user?.email,
          contact: user?.phoneNo,
          name: user?.name
        },
        theme: {color: '#ff0000'},
        notes: data.order.notes,
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        props.navigation.navigate('my_material');
      }).catch((error) => {
        // handle failure
        console.log(`Error: ${error}`);
        Alert.alert(`Something went wrong`);
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong...');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 20,
          }}>
          <TouchableOpacity onPress={toggleBookmark} disabled={isDisabled}>
            {isBookmarked ? (
              <Icon name="bookmarks" size={25} color="red" />
            ) : (
              <Icon name="bookmarks-outline" size={25} color="red" />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.heading]}>{quiz?.title}</Text>
        <Text style={styles.subHeading}>General Instructions:-</Text>
        <Text style={styles.paraText}>
          1. This test is of {quiz?.duration} minutes duration.
        </Text>
        <Text style={styles.paraText}>
          2. The examination will comprise of Objective type Multiple Choice
          Questions (MCQs).
        </Text>
        <Text style={styles.paraText}>
          3. All questions are compulsory and each carries {quiz?.markForEach}{' '}
          mark(s)
        </Text>
        <Text style={styles.paraText}>
          4. There will be NEGATIVE MARKING {quiz?.negativeMark} mark(s) for the
          wrong answers.
        </Text>
        <Text style={styles.paraText}>
          5. The students just need to click on the Right Choice / Correct
          option from the multiple choices /options given with each question.
          For Multiple Choice Questions, each question has four options, and the
          candidate has to click the appropriate option.
        </Text>
        <Text style={styles.paraText}>
          6. You must complete this test in one session. Make sure your internet
          in reliable.
        </Text>

        <View style={styles.table}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Total questions</DataTable.Title>
              <DataTable.Title>Total Marks</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>{quiz?.length}</DataTable.Cell>
              <DataTable.Cell>{quiz?.totalMarks}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View style={{ width: '100%', marginHorizontal: 10 }}>
          {quiz?.isPaid && (<>
            <Text style={{ color: colors.textColor }}>
              Price : <FAIcon name="rupee" size={13} color="#000" />{' '}
              {quiz?.price}
            </Text>
            <Text style={{ color: colors.textColor, flexWrap: 'wrap' }}>
              Note : Quiz will added to my materials screen after successful
              payment :
            </Text></>)}
        </View>
        {quiz?.isPaid ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCheckout(quiz)}>
            <Text style={styles.buttonText}>Buy Test</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // setting quiz data to use it globally
              setQuizData(quiz)
              props.navigation.navigate('test_board', {
                data: quiz?.questions,
              })
            }
            }>
            <Text style={styles.buttonText}>Start Test</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TestDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
  },
  wraper: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    padding: 5,
  },
  heading: {
    fontSize: 20,
    color: '#0a0a0a',
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: 20,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
    color: '#0a0a0a',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
  paraText: {
    fontSize: 14,
    color: colors.textColor,
    marginBottom: 10,
  },
  table: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'solid',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
