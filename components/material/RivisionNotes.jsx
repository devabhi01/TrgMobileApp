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
  const [selectedSubjects, setSelectedSubjects] = useState();

  const handleClassSelect = selectedClass => {
    setSelectedClass(selectedClass);

    const revisionNotesUri = selectedClass.rivisionNotesUri;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
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
        {selectedClass < 11
          ? <View>
          {subjectListForbelow11.map ((subjectName) => (
            <TouchableOpacity key={subjectName}>
              <Text>{subjectName.subjectName}</Text>
            </TouchableOpacity>
          ))}
        </View>
          : <View>
          {subjectListForafter10.map ((subjectName) => (
            <TouchableOpacity key={subjectName}>
              <Text>{subjectName.subjectName}</Text>
            </TouchableOpacity>
          ))}
        </View>}
        
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
