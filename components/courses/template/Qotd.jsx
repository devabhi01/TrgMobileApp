import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

const Qotd = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <View style={{backgroundColor:"#f5f5f5",borderRadius:8,paddingVertical:10}}>
        <Text style={styles.quesstions}>Who is the prime minister of India?</Text>
        <Text style={{marginHorizontal:40,color:'#0a0a0a'}}>Options</Text>

        <RadioButton.Group
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
        </RadioButton.Group>

      <Text style={styles.correctAns}>Correct Answer : Narendra Modi</Text>
      <Text style={styles.wrongAns}>Wrong Answer</Text>
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
    color:'#0a0a0a',
    marginHorizontal: 20,
    fontSize: 18,
  },
  ans: {
    color:'#0a0a0a',
    fontSize: 16,
    paddingLeft: 5,
  },
  correctAns: {
    color:'#0a0a0a',
    marginLeft: 20,
    fontSize: 16,
    paddingTop: 10,
    display: 'none',
  },
  
  wrongAns: {
    color:'#0a0a0a',
    marginLeft: 20,
    fontSize: 16,
    paddingTop: 10,
    display: 'none',
  },
});
