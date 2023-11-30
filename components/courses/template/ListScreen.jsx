import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { subjectListForafter10, subjectListForbelow11 } from '../../../model';

const ListScreen = () => {
  const navigation = useNavigation();
  const [subjectList, setSubjectList] = useState([]);

  
  return (
    <SafeAreaView style={{ flex: 1, margin: 20 }}>
      <View>
        <Text style={{ color: '#000', fontSize: 18, textAlign: 'center' }}>
          Revision Notes for class:
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ color: '#000', fontSize: 16, marginBottom: 10 }}>
          Subjects:
        </Text>
        
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
