import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MoreOptBtn from './courses/template/MoreOptBtn';

const Material = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.conatiner}>

          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Revision Notes '}
              
              onPress={() => props.navigation.navigate('rivision_notes')}
              backgroundColor={'#17AADD'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Support Material '}
              
              onPress={() => props.navigation.navigate('support_material')}
              backgroundColor={'#17AADD'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Syllabus'}
              
              onPress={() => props.navigation.navigate('sylabus')}
              backgroundColor={'#17AADD'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Assignments'}
              
              onPress={() => props.navigation.navigate('assignments')}
              backgroundColor={'#17AADD'}
            />
          </View>

          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'NCERT Books'}
              
              onPress={() => props.navigation.navigate('ncertbooks')}
              backgroundColor={'#17AADD'}
            />
          </View>

          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'PreviousYearQuestionPaper'}
              
              onPress={() => props.navigation.navigate('previous_year_qp')}
              backgroundColor={'#17AADD'}
            />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Material;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  btnCont: {
    margin:20,
  },
});
