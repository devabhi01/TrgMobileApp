import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const DoubtClearence = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.txt}> Topic : </Text>
          <View
            style={{
              backgroundColor: '#D9D7D7',
              borderRadius: 8,
              marginTop: 10,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Type topic name"
              placeholderTextColor={'#8F8F8F'}
              cursorColor={'#dc3545'}
              multiline
              keyboardType="default"
            />
          </View>

          <Text style={[styles.txt, {marginTop: 20}]}> Type Your Doubt : </Text>
          <View
            style={{
              backgroundColor: '#D9D7D7',
              borderRadius: 8,
              marginTop: 10,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Type question"
              placeholderTextColor={'#8F8F8F'}
              cursorColor={'#dc3545'}
              multiline
              keyboardType="default"
            />
          </View>

          <Text style={{color: '#8F8F8F', marginTop: 50}}>
            {' '}
            Note : Your solution will be send to your registered email.
          </Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: '#dc3545',
                height: 50,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
                marginTop: 20,
              }}>
              <Icon name="send" size={20} color="#fff" />
              <Text style={{color: '#fff', fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoubtClearence;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  txt: {
    color: '#0a0a0a',
    fontSize: 18,
    fontWeight: '600',
  },
  textInput: {
    color: '#0a0a0a',
    fontSize: 16,
    fontWeight: '600',
    textAlignVertical: 'top',
    margin: 5,
  },
});
