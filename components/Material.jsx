import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants';
import React from 'react';
import MoreOptBtn from './courses/template/MoreOptBtn';
import {useNavigation} from '@react-navigation/native';
import {
  courseList,
  classData,
  subjectListForbelow11,
  subjectListForafter10,
} from '../model';
import CustomDropdown from './courses/template/CustomDropdown';

const {width, height} = Dimensions.get('screen');

const Material = props => {
  const navigation = useNavigation();

  const material = [
    {
      materialName: 'Revision Notes',
    },
    {
      materialName: 'Support Material',
    },
    {
      materialName: 'Syllabus',
    },
    {
      materialName: 'Assignments',
    },
    {
      materialName: 'NCERT Books',
    },
    {
      materialName: 'NCERT Solutions',
    },
    {
      materialName: 'Previous Year Question Paper',
    },
  ];

  const subjects = [
    {
      subjectName: 'Maths',
    },
    {
      subjectName: 'Science',
    },
    {
      subjectName: 'English',
    },
    {
      subjectName: 'Hindi',
    },
    {
      subjectName: 'Social Science',
    },
    {
      subjectName: 'Sanskrit',
    },
    {
      subjectName: 'Computer Science',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      <ScrollView>
        <View style={styles.conatiner}>
          <CustomDropdown
            initialValue={material}
            innerList={'materialName'}
            displayName={'Material'}
            menuHeight={200}
          />
          <CustomDropdown
            initialValue={courseList}
            innerList={'courseName'}
            displayName={'Course'}
          />
          <CustomDropdown
            initialValue={classData}
            innerList={'class'}
            displayName={'Course'}
            menuHeight={200}
          />
          <CustomDropdown
            initialValue={subjects}
            innerList={'subjectName'}
            displayName={'Subject'}
            menuHeight={200}
          />

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

      <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate('materialList')}>
        <Text style={{fontSize: 18, color: '#fff'}}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Material;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  btnCont: {
    margin: 20,
  },
  buyBtn: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
