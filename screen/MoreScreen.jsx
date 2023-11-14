import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../constants';
import React from 'react';
import MoreOptBtn from '../components/courses/template/MoreOptBtn';

const MoreScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Support Material'}
          IocnName={'book'}
          onPress={() => props.navigation.navigate('support_material')}
          backgroundColor={'#D3D936'}
        />
      </View>
      <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Revision Notes'}
          IocnName={'clipboard'}
          onPress={() => props.navigation.navigate('rivision_notes')}
          backgroundColor={'#17AADD'}
        />
      </View>

      <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Videos'}
          IocnName={'play'}
          onPress={() => props.navigation.navigate('videos')}
          backgroundColor={'#F26DAB'}
        />
      </View>

      <View style={styles.btnCont}>
        <MoreOptBtn
          name={'My Courses'}
          IocnName={'bookmarks'}
          onPress={() => props.navigation.navigate('my_course')}
          backgroundColor={'#BA68CA'}
        />
      </View>

      <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Setting'}
          IocnName={'settings'}
          onPress={() => props.navigation.navigate('setting_screen')}
          backgroundColor={'#FFD53E'}
        />
      </View>
      {/* <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Material'}
          onPress={() => props.navigation.navigate('material')}
          backgroundColor={'#F24E29'}
        />
      </View> */}
      {/* <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Videos'}
          onPress={() => props.navigation.navigate('material')}
          backgroundColor={'#F29A2E'}
        />
      </View>
       */}
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
    paddingHorizontal: 20,
  },
  btnCont: {
    marginTop: 20,
  },
});
