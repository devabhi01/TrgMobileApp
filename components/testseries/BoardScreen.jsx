import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants';
import {testData} from './testData';
import QuestionItem from './QuestionItem';

const BoardScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <Text style={styles.subject}>General Knowledge</Text>
        <Text style={{color: colors.textColor, fontSize: 16, marginLeft:20}}>
          Questions : {' ' + currentIndex + '/' + testData.length}
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            data={testData}
            renderItem={({item, index}) => {
              return <QuestionItem data={item} />;
            }}
          />
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
    fontSize: 18,
    color: '#0a0a0a',
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});
