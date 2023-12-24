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
import FAIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMaterial = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* {downloads.map(material => {
        return (
          <View style={{margin: 20, marginBottom: 0}}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.subjectText}>{material?.title}</Text>
                <Text style={styles.descText}>
                  {' '}
                  {''} - Class : {''}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <TouchableOpacity onPress={() => {}}>
                  <FAIcon name="delete" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        );
      })} */}

      
      {/* In case of no downloads */}
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text style={{color:'#0a0a0a'}}>No Materials(Paid)</Text>
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
