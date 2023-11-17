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

const RivisionNotes = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

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
  };

  return (
    <SafeAreaView>
      {/* Access selectedCourse state here if needed */}
      {/* <View style={{margin: 20}}>
        <Text style={{color: '#000', fontSize: 18}}>Select Course</Text>
        <CustomDropdown
          initialValue={courseList}
          innerList="courseName"
          onSelect={handleCourseSelect}
        />
        
      </View> */}
      
      <View style={{marginHorizontal: 20,marginTop:20}}>
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
          navigation.navigate('pdf_screen', {
            uri: selectedClass ? selectedClass.rivisionNotesUri : '',
          })
        }>
        <Text style={{color: '#fff', fontSize: 18}}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RivisionNotes;

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
