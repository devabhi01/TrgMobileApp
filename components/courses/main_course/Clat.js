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
const {height, width} = Dimensions.get('window');

const Clat = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <View style={styles.container}>
          <View style={{paddingHorizontal: 20}}>
            <View style={{marginVertical: 10}}>
              {/* <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: colors.primary,
                }}>
                CUET
              </Text> */}
            </View>

            {/* Details of the Course */}
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
                <Text style={{fontWeight: '600'}}>1 January 2024</Text>{' '}
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
                Duration : <Text style={{fontWeight: '600'}}>1 Year</Text>{' '}
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Fee :{' '}
                <Text style={{fontWeight: '600'}}>Rs. 80,000/- (1 Year)</Text>{' '}
              </Text>
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
                <Text style={{fontWeight: '600'}}>8:00 AM to 8: PM PM</Text>{' '}
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
                  B-188, New Jankipuri, Near ST. Michell Public School, New
                  Delhi - 110059
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

            {/* course details */}
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
                Welcome to CLAT 2023
              </Text>

              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  marginTop: 20,
                  fontSize: 16,
                }}>
                The Consortium of National Law Universities has scheduled CLAT
                2024 for December 3, 2023. This forthcoming exam will have a
                revised format, with a duration of 2 hours in offline mode and a
                reduction in the total number of questions from 150 to 120.
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  marginTop: 20,
                  fontSize: 16,
                }}>
                In terms of eligibility, General category students must have a
                minimum of 50% in graduation (while reserved categories require
                45%) to appear for the CLAT PG exam in 2024. Additionally, there
                have been modifications in the reservation criteria,
                particularly concerning the seat matrix for Gandhinagar National
                Law University (GNLU), Silvassa.
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  marginTop: 20,
                  fontSize: 16,
                }}>
                Aspiring candidates who have registered for CLAT 2024 can now
                access sample papers provided by the Consortium of NLUs on their
                official website. These sample papers can be downloaded using
                the user ID and password created during registration.
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  marginTop: 20,
                  fontSize: 16,
                }}>
                Furthermore, the CLAT 2024 Syllabus PDF is readily available for
                download. The syllabus for CLAT UG encompasses five sections:
                English Language, Current Affairs including General Knowledge,
                Legal Reasoning, Logical Reasoning, and Quantitative Techniques.
                For those preparing for CLAT 2024, having access to this
                syllabus is essential for effective preparation.
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  marginTop: 20,
                  fontSize: 16,
                }}>
                It's worth noting that CLAT is widely regarded as one of India's
                most competitive law entrance exams. Each year, an impressive
                pool of approximately 45,000-50,000 candidates vies for roughly
                3,000 available seats, leading to a qualifying percentage as low
                as 6%. Therefore, meticulous planning and access to appropriate
                resources for CLAT 2024 preparation are imperative.
              </Text>
            </View>
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
                the field of quality education, particularly for competitive
                exams like the SSC CGL, CHSL, MTS, CUET, DSSSB, CLAT, and also
                catering to CBSE/ICSE and other board examinations. With a
                dedicated team and a commitment to excellence, TRG understands
                the unique requirements of aspirants striving to excel in these
                competitive exams and contribute to their career growth.
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginBottom: 100,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity>
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
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={{fontSize: 18, color: '#fff'}}>Buy Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Clat;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
  container: {
    backgroundColor: colors.graylight,
    marginTop: -20,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    position: 'relative',
  },
  buyBtn: {
    width: width - 40,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
