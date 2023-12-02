import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import CbseSVG from '../assets/img/cbse.svg';
import {colors} from '../constants';
import {classData} from '../model';

import ModalDropdown from 'react-native-modal-dropdown';
import CustomDropdown from '../components/courses/template/CustomDropdown';

const TestSeriesScreen = props => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [course, setCourse] = useState('');

  const courseList = [
    {
      courseName: 'Cbse',
    },
    {
      courseName: 'Icse',
    },
    {
      courseName: 'Ssc',
    },
    {
      courseName: 'Cuet',
    },
    {
      courseName: 'Clat',
    },
    {
      courseName: 'Dsssb',
    },
    {
      courseName: 'PoliceService',
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
      subject: 'Sst',
    },
    {
      subject: 'Hindi',
    },
    {
      subject: 'Sanskrit',
    },
    {
      subject: 'Science',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        {/* <Image
          style={styles.img}
          source={require('../assets/img/materials_pos.png')}
        /> */}

        <View style={styles.container}>
          <View style={{paddingHorizontal: 30}}>
            <View style={{marginVertical: 10}}>
              <View style={{marginTop: 20}}>
                <CustomDropdown
                  initialValue={courseList}
                  innerList={'courseName'}
                  displayName={'Course'}
                  menuHeight={200}
                />

                <View style={{marginVertical: 20}}>
                  <CustomDropdown
                    initialValue={classData}
                    innerList={'class'}
                    displayName={'Class'}
                    menuHeight={200}
                  />
                </View>
                <CustomDropdown
                  initialValue={subjectList}
                  innerList={'subject'}
                  displayName={'Subject'}
                  menuHeight={200}
                />
              </View>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate('testlist')}>
                {/* <MaterialIcon name="bookshelf" size={30} color={colors.white} /> */}
                <Text style={styles.textBtn}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    
  },
  textBtn: {
    fontSize: 18,

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
