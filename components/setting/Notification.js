import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants';
import {Checkbox, RadioButton, Button} from 'react-native-paper';

const Notification = () => {
  const [checked, setChecked] = useState('');
  const [checked1, setChecked1] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        <View style={styles.wraper}>
          <View style={{marginVertical: 30}}>
            <Text
              style={{
                fontSize: 18,
                color: colors.textColor,
                fontWeight: 500,
                marginBottom: 20,
              }}>
              Turn promotional notifications from{' '}
              <Text style={{color: colors.primary}}>TRG</Text> On or Off{' '}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: colors.primary,
                fontWeight: 600,
                marginBottom: 10,
              }}>
              I want to recieve :{' '}
            </Text>

            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: colors.primary,
                padding: 10,
                marginBottom: 30,
              }}>
              <Checkbox
                color="#dc3545"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text
                style={{
                  color: colors.textColor,
                  textAlign: 'center',
                  fontWeight: 500,
                }}>
                Promotions, courses recomendations, and helpfull resourcesfrom
                TRG
              </Text>
            </View>

            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: colors.primary,
                padding: 10,
                marginBottom: 30,
              }}>
              <Checkbox
                color="#dc3545"
                status={checked1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked1(!checked1);
                }}
              />
              <Text
                style={{
                  color: colors.textColor,
                  textAlign: 'center',
                  fontWeight: 500,
                }}>
                Don't send me any promotional notifications
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                mode="outlined"
                textColor="#dc3545"
                rippleColor={'#dc3545'}
                onPress={() => {}}
                style={{
                  width: 200,
                  borderWidth: 2,
                  borderColor: '#dc3545',
                  borderRadius: 10,
                }}>
                Save
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  wraper: {
    // marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.graylight,
    paddingHorizontal: 20,
    
  },
});
