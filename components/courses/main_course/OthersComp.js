import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { colors } from '../../../constants';
  import Fa6 from 'react-native-vector-icons/FontAwesome6';
  
  const OthersComp = (props) => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
        <ScrollView>
          
          <View style={styles.container}>
            
            <Text style={{color:colors.textColor,textAlign:'center'}}>This page will updated soon </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default OthersComp;
  
  const styles = StyleSheet.create({
    
    container: {
      backgroundColor: colors.graylight,
      marginTop: 20,
      borderColor: colors.primary,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    btn: {
      marginVertical: 10,
      flexDirection: 'row',
      paddingLeft: 20,
      alignItems: 'center',
    },
    textBtn: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingVertical: 15,
      color: colors.white,
      paddingLeft: 10,
      color: '#dc3545',
    },
  });
  