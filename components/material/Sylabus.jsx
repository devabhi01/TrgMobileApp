import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomDropdown from '../courses/template/CustomDropdown';
import {courseList, classData} from '../../model';

const Sylabus = ({navigation}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleCourseSelect = course => {
    setSelectedCourse(course);
    // Do something with the selected course if needed
  };

  const handleClassSelect = selectedClass => {
    setSelectedClass(selectedClass);
    // Do something with the selected class if needed
  };

  const getSelectedSyllabusUri = () => {
    if (selectedClass) {
      // Check the selected course and return the appropriate syllabus URI
      if (selectedCourse && selectedCourse.courseName === 'CBSE') {
        return selectedClass.SyllabusUriCbse;
      } else if (selectedCourse && selectedCourse.courseName === 'ICSE') {
        return selectedClass.SyllabusUriIcse;
      } else {
        // Default to the general SyllabusUri if no specific syllabus URI is found
        return selectedClass.SyllabusUri || '';
      }
    }
    return '';
  };

  return (
    <SafeAreaView>
      <View style={{margin: 20}}>
        <Text style={{color: '#000', fontSize: 18}}>Select Course</Text>
        <CustomDropdown
          initialValue={courseList}
          innerList="courseName"
          onSelect={handleCourseSelect}
          displayName={'Course'}
        />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{color: '#000', fontSize: 18}}>Select Class</Text>
        <CustomDropdown
          initialValue={classData}
          innerList="class"
          menuHeight={300}
          onSelect={handleClassSelect}
          displayName={'Class'}
        />
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() =>
          navigation.navigate('pdf_screen', {
            uri: getSelectedSyllabusUri(),
          })
        }>
        <Text style={{color: '#fff', fontSize: 18}}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Sylabus;

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#dc3545',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});
