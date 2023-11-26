import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {colors} from '../../constants';
import React, {useState, useEffect} from 'react';
import CustomDropdown from '../courses/template/CustomDropdown';
import {
  courseList,
  classData,
  subjectListForafter10,
  subjectListForbelow11,
} from '../../model';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const RivisionNotes = props => {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleCourseSelect = course => {
    setSelectedCourse(course);
    // Do something with the selected course if needed
  };

  const handleClassSelect = selectedClass => {
    setSelectedClass(selectedClass);
    // Do something with the selected class if needed

    // Access revision notes URI and pass it to the navigation params
    const revisionNotesUri = selectedClass.rivisionNotesUri;
    // You can perform additional actions with the revision notes URI if needed

    // Navigate to 'pdf_screen' with the revision notes URI
    // navigation.navigate('pdf_screen', {
    //   uri: revisionNotesUri,
    // });
    // if (selectedClass.class < 11) {
    //   setSelectedSubjects(subjectListForbelow11);
    // } else {
    //   setSelectedSubjects(subjectListForafter10);
    // }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Access selectedCourse state here if needed */}
      {/* <View style={{margin: 20}}>
        <Text style={{color: '#000', fontSize: 18}}>Select Course</Text>
        <CustomDropdown
          initialValue={courseList}
          innerList="courseName"
          onSelect={handleCourseSelect}
        />
        
      </View> */}

      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text style={{color: '#000', fontSize: 18}}>Select Class</Text>
        <CustomDropdown
          initialValue={classData}
          innerList="class"
          menuHeight={300}
          onSelect={handleClassSelect}
          displayName={'Class'}
        />
        {/* Access selectedClass state here if needed */}
      </View>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() =>
          navigation.navigate('ListScreen', {
            selectedClass: selectedClass,
          })
        }>
        <Text style={{color: '#fff', fontSize: 18}}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RivisionNotes;

const styles = StyleSheet.create({
  submitBtn: {
    width: width - 40,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  subjectButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 100,
    height: 50,
  },
});
