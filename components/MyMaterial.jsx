import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../constants';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MyMaterial = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* In case of no downloads */}
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style={{color: '#0a0a0a'}}>No Materials(Paid)</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyMaterial;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 5,
  },
  subjectText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  descText: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 12,
    marginLeft: 5,
  },
});
