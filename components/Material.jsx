import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MoreOptBtn from './courses/template/MoreOptBtn';

const Material = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.conatiner}>

          {/* <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Revision Notes '}
              
              onPress={() => props.navigation.navigate('rivision_notes')}
              backgroundColor={'#dc3545'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Support Material '}
              
              onPress={() => props.navigation.navigate('support_material')}
              backgroundColor={'#dc3545'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Syllabus'}
              
              onPress={() => props.navigation.navigate('sylabus')}
              backgroundColor={'#dc3545'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'Assignments'}
              
              onPress={() => props.navigation.navigate('assignments')}
              backgroundColor={'#dc3545'}
            />
          </View>

          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'NCERT Books'}
              
              onPress={() => props.navigation.navigate('ncertbooks')}
              backgroundColor={'#dc3545'}
            />
          </View>
          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'NCERT Solutions'}
              
              onPress={() => props.navigation.navigate('ncertSoln')}
              backgroundColor={'#dc3545'}
            />
          </View>

          <View style={styles.btnCont}>
            <MoreOptBtn
              name={'PreviousYearQuestionPaper'}
              
              onPress={() => props.navigation.navigate('previous_year_qp')}
              backgroundColor={'#dc3545'}
            />
          </View> */}
          
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
