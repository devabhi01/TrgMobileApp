import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import Fa6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const Cbse = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1,padding:20}}>
      <ScrollView>
        <View >
          <Text style={{color: colors.primary, fontSize: 18}}>
            "TRG's 1-Year CBSE Board Comprehensive Tuition
            Classes, opt for Online, Offline, or Home Learning!"
          </Text>
          <Text style={{color: colors.primary, fontSize: 18}}>
            by The Right Guru
          </Text>

          {/* Detail of the course */}
          <View
            style={{
              marginVertical: 10,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: colors.primary,
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontWeight: '400',
              }}>
              Date of Commencement :{' '}
              <Text style={{fontWeight: '600'}}> April 2024</Text>{' '}
            </Text>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontWeight: '400',
              }}>
              Mode : <Text style={{fontWeight: '600'}}>Offline/Online</Text>{' '}
            </Text>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontWeight: '400',
              }}>
              Duration : <Text style={{fontWeight: '600'}}>12 Months</Text>{' '}
            </Text>
            {/* <Text
                style={{
                  color: colors.textColor,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Fee :{' '}
                <Text style={{fontWeight: '600'}}>Rs. 15,000/- (6 Month)</Text>{' '}
              </Text> */}
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontWeight: '400',
              }}>
              Admission : <Text style={{fontWeight: '600'}}>Open</Text>{' '}
            </Text>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontWeight: '400',
              }}>
              Class Timing :{' '}
              <Text style={{fontWeight: '600'}}>8:00 AM to 8:00 PM</Text>{' '}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#0a0a0a',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <Text
                style={{
                  backgroundColor: '#5cc8ff',
                  color: '#fff',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#0a0a0a',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: -22,
                }}>
                Location
              </Text>
              <Text style={{color: colors.textColor, marginVertical: 10}}>
                42 Second Floor, Omaxe Galleria, Sector 14, Jhajjar Road,
                Bahadurgarh, Haryana - 124-507
              </Text>
              <Text style={{color: colors.textColor, marginVertical: 10}}>
                B-188, New Jankipuri, Near ST. Michell Public School, New Delhi
                - 110059
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#0a0a0a',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  backgroundColor: '#5cc8ff',
                  color: '#fff',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#0a0a0a',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: -22,
                }}>
                Contact Us
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  marginVertical: 5,
                  fontSize: 16,
                }}>
                9570-424242
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  marginVertical: 5,
                  fontSize: 16,
                }}>
                9647-787878
              </Text>
            </View>
          </View>

          {/* Detail of the course */}
          <View
            style={{
              marginVertical: 10,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: colors.primary,
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#5cc8ff',
              }}>
              About The Right Guru Classroom Programme
            </Text>

            <Text
              style={{
                color: colors.textColor,
                marginBottom: 10,
                marginTop: 20,
                fontSize: 16,
              }}>
              Since 2021, The Right Guru (TRG) has been a prominent player in
              the field of quality education, particularly for competitive exams
              like the SSC CGL, CHSL, MTS, CUET, DSSSB, CLAT, and also catering
              to CBSE/ICSE and other board examinations. With a dedicated team
              and a commitment to excellence, TRG understands the unique
              requirements of aspirants striving to excel in these competitive
              exams and contribute to their career growth.
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                padding: 10,
              }}>
              <Text style={{color: colors.primary, fontSize: 16}}>
                Why Choose TRG?
              </Text>
              <Text style={{color: colors.textColor, fontSize: 14}}>
                At TRG, we are committed to nurturing academic growth, fostering
                a deep understanding of subjects, and providing personalized
                attention to every student. Our diverse teaching methods and
                experienced educators create an enriching learning environment.
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                padding: 10,
              }}>
              <Text style={{color: colors.primary, fontSize: 16}}>
                Our Approach to Board Exam Preparation
              </Text>
              <Text style={{color: colors.textColor, fontSize: 14}}>
                At THE RIGHT GURU Tuition Centre, we believe in the power of
                comprehensive learning. Our expert educators are committed to
                providing you with top-notch study resources, personalized
                guidance, and a transformative learning experience.
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                padding: 10,
              }}>
              <Text style={{color: colors.primary, fontSize: 16}}>
                Guidance for Class 10 and 12
              </Text>
              <Text style={{color: colors.textColor, fontSize: 14}}>
                Class 10 and 12 are crucial stages of your academic journey. We
                are here to help you navigate them with confidence. Our
                experienced faculty will empower you with the knowledge, skills,
                and exam strategies needed to excel in board exams.
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                padding: 10,
              }}>
              <Text style={{color: colors.primary, fontSize: 16}}>
                Mastering the Board Exam Pattern
              </Text>
              <Text style={{color: colors.textColor, fontSize: 14}}>
                Understanding the Board exam pattern is key to your success. Our
                teaching methodology focuses on both scholastic and
                co-scholastic areas. We believe in nurturing not only academic
                excellence but also physical and mental well-being.
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                padding: 10,
              }}>
              <Text style={{color: colors.primary, fontSize: 16}}>
                Personalized Learning
              </Text>
              <Text style={{color: colors.textColor, fontSize: 14}}>
                Education is not one-size-fits-all. We recognize your unique
                learning needs and adapt our teaching methods to cater to them.
                Our goal is to help you grasp concepts, develop critical
                thinking skills, and ace your exams. 
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderStyle: 'solid',
                padding: 10,
              }}>
              <Text style={{color: colors.primary, fontSize: 16}}>
                Beyond the Classroom
              </Text>
              <Text style={{color: colors.textColor, fontSize: 14}}>
                Education extends beyond textbooks. We encourage participation
                in extracurricular activities, sports, arts, and more. These
                experiences not only enhance your skills but also shape you into
                a well-rounded individual.
              </Text>
            </View>
          </View>
          <View
              style={{
                marginVertical: 10,
                marginBottom: 100,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('pdf_screen', {
                    uri: 'https://therightguru-website.s3.ap-south-1.amazonaws.com/TnC.pdf',
                  })
                }>
                <Text
                  style={{
                    color: colors.textColor,
                    textAlign: 'right',
                    fontSize: 18,
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 8,
                    borderColor: colors.primary,
                  }}>
                  Know more...
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={{fontSize: 18, color: '#fff'}}>Join Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cbse;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
  container: {
    flex: 1,
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
 buyBtn: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
