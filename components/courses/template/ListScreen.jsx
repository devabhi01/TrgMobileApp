import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { subjectListForafter10, subjectListForbelow11 } from '../../../model';

const ListScreen = ({ route }) => {
  const navigation = useNavigation();
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    if (route && route.params && route.params.selectedClass) {
      const { selectedClass } = route.params;

      // Logic to select subject list based on class number
      if (selectedClass.class && selectedClass.class < 11) {
        setSubjectList(subjectListForbelow11 || []);
      } else {
        setSubjectList(subjectListForafter10 || []);
      }
    }
  }, [route]);

  return (
    <SafeAreaView style={{ flex: 1, margin: 20 }}>
      <View>
        <Text style={{ color: '#000', fontSize: 18, textAlign: 'center' }}>
          Revision Notes for class: {route.params.selectedClass.class}
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ color: '#000', fontSize: 16, marginBottom: 10 }}>
          Subjects:
        </Text>
        {Array.isArray(subjectList) && subjectList.length > 0 ? (
          subjectList.map((subject, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: '#DDDDDD',
                padding: 10,
                borderRadius: 5,
                marginBottom: 10,
              }}
              onPress={() => {
                // Handle subject selection/navigation here
              }}
            >
              <Text>{subject.subject}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No subjects available for this class.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
