import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../constants';
import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ToastManager, {Toast} from 'toastify-react-native';
import {
  courseList,
  classData,
} from '../model';
import CustomDropdown from './courses/template/CustomDropdown';
import {fetchMaterials} from '../utils/APIs';
import {useUserContext} from '../utils/userContext';

const Material = props => {
  const navigation = useNavigation();
  const {user} = useUserContext();

  const [course, setCourse] = useState('');
  const [classNo, setClassNo] = useState('');
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('');

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
      materialName: 'Assignment',
    },
    {
      materialName: 'NCERT Book',
    },
    {
      materialName: 'NCERT Solution',
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

  const handleFilter = async () => {
    try {
      const res = await fetchMaterials(
        {course, subject, class: classNo, type},
        user?._id,
      );
      const materials = await res.json();
      props.navigation.navigate('materialList', {data: materials});
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong...');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      <ToastManager height={55} width={'auto'} />
      <View style={styles.conatiner}>
        <CustomDropdown
          initialValue={material}
          innerList={'materialName'}
          displayName={'Material'}
          menuHeight={200}
          setData={setType}
        />
        <CustomDropdown
          initialValue={courseList}
          innerList={'courseName'}
          displayName={'Course'}
          setData={setCourse}
        />
        <CustomDropdown
          initialValue={classData}
          innerList={'class'}
          displayName={'Class'}
          menuHeight={200}
          setData={setClassNo}
        />
        <CustomDropdown
          initialValue={subjects}
          innerList={'subjectName'}
          displayName={'Subject'}
          menuHeight={200}
          setData={setSubject}
        />
      </View>

      <TouchableOpacity style={styles.buyBtn} onPress={handleFilter}>
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
