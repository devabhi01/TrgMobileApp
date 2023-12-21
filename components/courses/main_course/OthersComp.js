import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const OthersComp = props => {
  const listItem = text => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingRight: 20,
        borderTopWidth: 1,
        borderStyle: 'solid',
      }}>
      <Icon name="arrow-forward" size={24} color="#dc3545" />
      <Text style={{color: colors.textColor}}>{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Other Government Services</Text>
          <Text style={styles.text}>
            Numerous government job examinations in India, administered by
            various government bodies, often don't garner as much attention as
            well-known exams like the UPSC Civil Services or SSC Combined
            Graduate Level. Nonetheless, these lesser-known exams provide
            promising career prospects and opportunities.
          </Text>
          <Text style={styles.subtitle}>
            Here are the list of some lesser-known government exams that offer
            decent career options:
          </Text>

          <View style={{marginTop: 20, gap: 10,marginBottom:30}}>
            {listItem('RBI Grade B Examination')}
            {listItem(
              'Botanist, Legal Officer, Joint Assistant Director, Specialist Gr III recruitment',
            )}
            {listItem('Combined Geo-Scientist & Geologist Examination')}
            {listItem('IES/ ISS Examination')}
            {listItem(
              'Indian Space Research Organization Scientist Examination',
            )}
            {listItem('Stenographer Grade C&D recruitment')}
            {listItem('Specialist Cadre Officer Examination')}
            {listItem('Deputy General Manager, Analyst')}
            {listItem('RRB NTPC Examination')}
            {listItem('LIC AAO Examination')}
            {listItem(
              'Intelligence Bureau Assistant Central Intelligence Officers Examination',
            )}
            {listItem(
              'Defense Research & Development Organization SET Examination',
            )}
            {listItem('UIDAI Examination')}
            {listItem('Indian Statistical Service (ISS) Exam')}
            {listItem('Indian Economic Service (IES) Exam')}
            {listItem(
              'Defense Research and Development Organization (DRDO) Exam',
            )}
            {listItem('Indian Forest Service (IFS) Exam')}
            {listItem('Intelligence Bureau (IB) Exam')}
            {listItem('Reserve Bank of India (RBI) Exams')}
            {listItem(
              'Staff Selection Commission (SSC) Exams (other than SSC CGL)',
            )}
            {listItem('State Public Service Commission Exams')}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
    margin: 20,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    color: colors.textColor,
    fontSize: 18,
    marginTop: 20,
  },
  subtitle: {
    color: colors.softPrimary,
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
  },
});

export default OthersComp;
