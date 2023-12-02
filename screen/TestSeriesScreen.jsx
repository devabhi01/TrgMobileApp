import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import CbseSVG from '../assets/img/cbse.svg';
import { colors } from '../constants';
import { classData } from '../model';

import ModalDropdown from 'react-native-modal-dropdown';
import CustomDropdown from '../components/courses/template/CustomDropdown';
import { fetchQuizes } from '../utils/APIs';

const TestSeriesScreen = props => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [course, setCourse] = useState('');
  const [classNo, setClassNo] = useState('');
  const [subject, setSubject] = useState('');

  const courseList = [
    {
      courseName: 'CBSE',
    },
    {
      courseName: 'ICSE',
    },
    {
      courseName: 'SSC',
    },
    {
      courseName: 'CUET',
    },
    {
      courseName: 'CLAT',
    },
    {
      courseName: 'DSSSB',
    },
    {
      courseName: 'Police',
    },
  ];

  const subjectList = [
    {
      subject: 'English',
    },
    {
      subject: 'Mathematics',
    },
    {
      subject: 'SST',
    },
    {
      subject: 'Hindi',
    },
    {
      subject: 'Sanskrit',
    },
    {
      subject: 'Science',
    }
  ];

  const handleFilter = async () => {
    try {
      const res = await fetchQuizes({course, subject, "class":classNo})
      const quizData = await res.json()
      props.navigation.navigate('testlist', {data: quizData})
    } catch (error) {
      console.log(error)
      Alert.alert("Something went wrong...")
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
      {/* <Image
          style={styles.img}
          source={require('../assets/img/materials_pos.png')}
        /> */}

      <View style={styles.container}>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={{ marginVertical: 10 }}>
            <View style={{ marginTop: 20 }}>

              <CustomDropdown
                initialValue={courseList}
                innerList={'courseName'}
                displayName={'Course'}
                menuHeight={200}
                setData={setCourse}
              />

              <View style={{ marginVertical: 20 }}>
                <CustomDropdown
                  initialValue={classData}
                  innerList={'class'}
                  displayName={'Class'}
                  menuHeight={200}
                  setData={setClassNo}
                />

              </View>
              <CustomDropdown
                initialValue={subjectList}
                innerList={'subject'}
                displayName={'Subject'}
                menuHeight={200}
                setData={setSubject}
              />

            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={handleFilter}>
              {/* <MaterialIcon name="bookshelf" size={30} color={colors.white} /> */}
              <Text style={styles.textBtn}>Lets Go</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestSeriesScreen;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
  container: {
    backgroundColor: colors.graylight,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  btn: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    paddingVertical: 15,
    color: colors.white,
  },
  btnStyle: {
    backgroundColor: '#ffffff',
    height: 60,
    justifyContent: 'center',

    color: colors.textColor,
    borderRadius: 8,
    elevation: 3,
    width: '100%',
  },
  textStyle: {
    color: colors.textColor,
    fontSize: 16,
    marginLeft: 15,
  },
  dropDownStyle: {
    backgroundColor: '#fafafa',
    marginTop: 10,
  },
  dropdownTextStyle: {
    color: colors.textColor,
    fontSize: 16,
    paddingLeft: 15,
  },
});
