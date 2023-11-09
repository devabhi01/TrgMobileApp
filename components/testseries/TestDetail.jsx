import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {colors} from '../../constants';
import {testData} from './testData';

const TestDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <Text style={styles.heading}>Test Series</Text>
        <Text style={styles.subHeading}>General Instructions:-</Text>
        <Text style={styles.paraText}>
          1. This test is of 30 minutes duration.
        </Text>
        <Text style={styles.paraText}>
          2. The examination will comprise of Objective type Multiple Choice
          Questions (MCQs).
        </Text>
        <Text style={styles.paraText}>
          3. All questions are compulsory and each carries One mark
        </Text>
        <Text style={styles.paraText}>
          4. There will be NO NEGATIVE MARKING for the wrong answers.
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

            <DataTable.Row >
              <DataTable.Cell>{testData.length}</DataTable.Cell>
              <DataTable.Cell>{testData.length}</DataTable.Cell>
              
            </DataTable.Row>
          </DataTable>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('test_board')}>
          <Text style={styles.buttonText}>Start Test</Text>
        </TouchableOpacity>
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
    marginTop: 20,
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
