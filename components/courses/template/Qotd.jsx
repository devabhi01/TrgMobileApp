import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {fetchQod} from '../../../utils/APIs';

const Qotd = () => {
  // loading status
  const [isQodLoading, setIsQodLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // State to manage answer visibility
  //qod data
  const [qod, setQod] = useState({});

  useEffect(() => {
    const getQodData = async () => {
      try {
        setIsQodLoading(true);
        const res = await fetchQod();
        const qodData = await res.json();
        setQod(qodData);
        setIsQodLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getQodData();
  }, []);

  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          paddingVertical: 10,
          elevation: 3,
          paddingVertical: 20,
        }}>
        {isQodLoading ? (
          <ActivityIndicator
            animating={true}
            color={'#dc3545'}
            size={20}
            style={{
              paddingVertical: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ) : (
          <>
            <Text style={styles.quesstions}>{qod?.question} </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.correctAns}>
                {showAnswer ? qod?.answer : null}{' '}
              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setShowAnswer(!showAnswer)}>
                {/* Toggle showAnswer state */}
                <Text style={{color: '#0a0a0a', textAlign: 'center'}}>
                  {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Qotd;

const styles = StyleSheet.create({
  options: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 60,
    alignItems: 'center',
  },
  quesstions: {
    color: '#0a0a0a',
    marginHorizontal: 20,
    fontSize: 18,
  },
  ans: {
    color: '#0a0a0a',
    fontSize: 16,
    paddingLeft: 5,
  },
  correctAns: {
    color: '#0a0a0a',
    marginLeft: 20,
    fontSize: 16,
    paddingTop: 10,
  },

  wrongAns: {
    color: '#0a0a0a',
    marginLeft: 20,
    fontSize: 16,
    paddingTop: 10,
    display: 'none',
  },

  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#dc3545',
    borderWidth: 1,
    width: 120,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 5,
  },
});
