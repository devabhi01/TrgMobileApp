import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
const {height, width} = Dimensions.get('window');

const Dsssb = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.img} source={require('../img/ssc_pos.png')} />
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
                SSC (Staff Selection Commission)
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
                Duration : <Text style={{fontWeight: '600'}}>3 Months</Text>{' '}
              </Text>
              <Text
                style={{
                  color: colors.textColor,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Fee :{' '}
                <Text style={{fontWeight: '600'}}>Rs. 24,999/- (3 Month)</Text>
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
                About ‘TRG’ DSSSB 3 Months Programme
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

              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  fontSize: 16,
                }}>
                Introducing the TRG DSSSB 6-months Classroom Programme, our aim
                is to address the specific needs of aspirants preparing for the
                esteemed DSSSB examination. This programme is meticulously
                designed to equip students with a strong foundational knowledge
                and advanced skills, ensuring their readiness for all stages of
                the DSSSB examination, from the initial tier to subsequent
                rounds and skill tests.
              </Text>

              <Text
                style={{
                  color: colors.textColor,
                  marginBottom: 10,
                  fontSize: 16,
                }}>
                Our pedagogical approach is thoughtfully tailored to facilitate
                a progressive learning journey, commencing with fundamental
                concepts and advancing to more complex topics, closely aligned
                with the DSSSB exam syllabus. Through a well-structured
                schedule, we ensure timely syllabus coverage and allocate ample
                time for comprehensive revision. Our programme not only
                emphasizes academic excellence but also instills discipline,
                dedication, and resilience in our students.
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

export default Dsssb;

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
