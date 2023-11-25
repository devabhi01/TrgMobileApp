import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, RadioButton} from 'react-native-paper';
import {fetchQod} from '../../../utils/APIs';

const Qotd = () => {
  // loading status
  const [isQodLoading, setIsQodLoading] = useState(false);

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

  // const [value, setValue] = useState('');
  return (
    <>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          borderRadius: 8,
          paddingVertical: 10,
          elevation: 3,
        }}>
        {isQodLoading ? (
          <ActivityIndicator
            style={{
              paddingVertical: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ) : (
          <>
            <Text style={styles.quesstions}>{qod?.question} </Text>
            <Text style={styles.correctAns}>{qod?.answer} </Text>
          </>
        )}

        {/* <RadioButton.Group
        color={'#dc3545'}
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View style={styles.options}>
            <RadioButton value="first" />
            <Text style={styles.ans}>Amit Sah</Text>
          </View>
          <View style={styles.options}>
            <RadioButton value="second" />
            <Text style={styles.ans}>Narendra Modi</Text>
          </View>
          <View style={styles.options}>
            <RadioButton value="third" />
            <Text style={styles.ans}>Narendra Modi</Text>
          </View>
          <View style={styles.options}>
            <RadioButton value="fourth" />
            <Text style={styles.ans}>Narendra Modi</Text>
          </View>
        </RadioButton.Group> */}
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
});
