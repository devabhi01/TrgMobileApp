import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import {Table, Row, Rows} from 'react-native-table-component';

const ExamDetails = ({title, details}) => {
  const tableHead = ['Particulars', 'Details'];
  const tableData = Object.entries(details).map(([key, value]) => [
    `${key} `,
    value,
  ]);

  return (
    <View>
      <Text style={styles.subtitle}>{title}</Text>
      <Table borderStyle={styles.border}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const Police = () => {
  const exams = [
    {
      title: 'UPSC CSE Exam (for IPS)',
      particulars: {
        'Official Website ': 'www.upsc.gov.in',
        'Name of the Exam ': 'Indian Police Service Examination',
        'Conducting Body ': 'Union Public Service Commission',
        'Exam Level ': 'National',
        'Exam Frequency ': 'Once in a Year',
        'Exam Levels ': 'Three levels',
        'Mode of Examination ': 'Pen paper-based',
        'Exam Duration ': '2 hours',
        'Exam Helpdesk No. ': '011-23098543',
        // Add more unique details as needed
      },
    },
    {
      title: 'UPSC CAPF Exam',
      particulars: {
        'Official Website': 'upsc.gov.in',
        'CAPF Full Form': 'Central Armed Police Forces (Assistant Commandant)',
        'Conducting Body': 'Union Public Service Commission',
        'Job Location': 'Across India',
        'Exam Frequency': 'Once in a year',
        'Mode of Application': 'Online',
        'Application Fees': 'General/OBC - INR 200, SC/ST/ Women - Exempted',
        'Exam Mode': 'Offline',
        'Selection Process': 'Written Test,Physical Test,Interview',
        'Exam Language': 'English and Hindi',
        'Exam Helpdesk': '011-23098543',
        // Add more unique details as needed
      },
    },
    {
      title: 'Delhi Police Head Constable Exam',
      particulars: {
        'Official website': 'https://www.delhipolice.nic.in/',
        'Recruiting Institution': 'Staff Selection Commission (SSC)',
        'Category of the Jobs': 'Central Government',
        'Application Mode': 'Online',
        'Location of the jobs': 'Delhi',
        'Application Fees': 'General- Rs.100,OBC/SC/ST/PWD/Women/EBC- Nil',
        'Selection Process':
          'Computer-Based Online Test, Physical Endurance Test, Physical Measurement Test, and Medical Examination',
        Helpdesk: '18001020898',
        // Add more unique details as needed
      },
    },
    {
      title: 'SSC CPO Exam',
      particulars: {
        'Official Website': 'ssc.nic.in',
        'Name of the Exam': 'SSC CPO 2022',
        'Conducting body': 'Staff Selection Commission (SSC)',
        'SSC CPO Full Form':
          'Staff Selection Commission Central Police Organisation',
        'Post': 'Sub-Inspector (SI) and Assistant Sub-Inspector (ASI)',
        'Vacancies': '4300',
        'Exam level': 'National',
        'Salary': 'INR 35,400 to 1,12,400 /-',
        'Mode of Application': 'Online',
        'Application Fees': 'Gen/OBC- INR 100/-',
        'Negative Marking': 'Paper-I & II - 0.25',
        'Selection Procedure': 'Paper-I,Paper-II',
        // Add more unique details as needed
      },
    },
    {
      title: 'Delhi Police MTS Exam',
      particulars: {
        'Official Website': 'https://delhipolice.nic.in',
        'Examination Conducting Authority':
          'Delhi Police Staff Selection Committee',
        'Name of the Post': 'Multi-Tasking Staff',
        'Total Vacancies': 'To be Announced',
        'Selection Process': 'Written and Trade Test',
        'Examination Centre Location': 'Delhi',
        'Exam Mode': 'Online and Offline',
        // Add more unique details as needed
      },
    },
    {
      title: 'SSC GD Exam',
      particulars: {
        'Official Website': 'https://ssc.nic.in/',
        'Name of Exam': 'SSC GD Constable',
        'SSC GD Full Form': 'Staff Selection Committee General Duty Constable',
        'Organization Name': 'Staff Selection Committee',
        'Post': 'Constable and Rifleman (General Duty)',
        'Mode of Application': 'Online',
        'Application Fees':
          'General: INR 100/- , Female/SC/ST/Ex-Servicemen: NIL',
        'Mode of Exam': 'Online',
        'Exam Language': 'English and Hindi',
        'Selection process':
          'Computer-Based Examination (CBE),2. Physical Efficiency Test (PET) / Physical Standard Test (PST),3. Medical Exam',
        'Job Location': 'Across nation',
        // Add more unique details as needed
      },
    },
    {
      title: 'Delhi Police Exam',
      particulars: {
        'Official Website': 'https://www.delhipolice.nic.in/',
        'Name of Exam': 'Delhi Police Constable Recruitment',
        'The conducting Body': 'The Staff Selection Commission',
        'Post': 'Constable (Executive) (Male & Female)',
        'Vacancies': '5846 Vacancies',
        'Exam Level': 'National',
        'Job Location': 'Delhi',
        'PayScale': 'INR 21700 - 69100/-',
        'Application Mode': 'Online',
        'Application Fees':
          '1. Unreserved - INR 100/- , 2. SC/ST/PWD/Women - No Fee',
        'Exam Mode': 'Online',
        'Negative Marking': '0.25 marks',
        'Exam Medium': 'Hindi & English',
        'Selection Process':
          '1. Computer-Based Test , 2. Physical Endurance Test , 3. Physical Measurement Test , 4. Medical Examination',
        'Website To Apply Online': 'ssc.nic.in',
        // Add more unique details as needed
      },
    },
    {
      title: 'Rajasthan Police Exam',
      particulars: {
        'Official Website': 'www.police.rajasthan.gov.in',
        'Name of the Exam': 'Rajasthan Police Recruitment 2022',
        'Conducting Body': 'Rajasthan Public Service Commission (RPSC)',
        'Exam Level': 'State',
        'Exam Frequency': 'Once in a year',
        'Exam Levels': 'Written test , Physical Proficiency test',
        'Mode of Examination': 'Offline',
        'Exam Duration': '120 Minutes',
        'Language': 'English and Hindi',
        'Post Name/Purpose of the exam':
          'For recruitment of candidates in various post in department of Rajasthan Police',
        // Add more unique details as needed
      },
    },
    {
      title: 'Bihar Police Exam',
      particulars: {
        'Official website': 'http://biharpolice.bih.nic.in/',
        'Board Name': 'Bihar police vacancy',
        'Name of the Posts': 'Constable, Driver, SI, A.S.I., and other posts',
        'Job Category': 'Police job',
        'Job Type': 'Bihar Govt Jobs',
        'Application Mode': 'Online',
        'Job Location': 'Bihar',

        // Add more unique details as needed
      },
    },
    {
      title: 'UP Police Exam',
      particulars: {
        'Official Website': 'http://uppbpb.gov.in/',
        'Name of the Exam': 'UP Police Recruitment 2022',
        'Organizing Body':
          'Uttar Pradesh Board Recruitment and Promotion Board (UPPRPB)',
        'Vacancies': 'To be announced soon',
        'Job Category': 'Police Job',
        'Job Type': 'Government',
        'Name of the Posts':
          'Sub Inspector , Constable , Jail Warder , Firemen , Driver , Ministerial Staff',
        'Mode of Application': 'Online',
        'Application Fees':
          'INR 400 (UP Police Sub-Inspector) , INR 200 (UP Police Constable) ',
        'Exam Mode': 'Online',
        'Duration of Exam': '2 Hours',
        'Job Location': 'Uttar Pradesh',

        // Add more unique details as needed
      },
    },
    // Add more exams with their particulars as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Police Services Exam</Text>
          <Text style={styles.text1}>
            Various governmental bodies administer police exams to recruit
            candidates for different positions within the Police Departments.
            Eligibility criteria vary based on the specific posts, requiring
            aspirants to carefully review the individual requirements. While
            most exams are held annually, certain vacancies might be announced
            separately to fulfill specific needs. Aspirants can find the most
            recent updates on police recruitment exams here. Below are some of
            the prominent police exams.
          </Text>

          {exams.map((exam, index) => (
            <ExamDetails
              key={index}
              title={exam.title}
              details={exam.particulars}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // Styles remain unchanged from the previous example
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
  },
  mainContainer: {
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
  text1: {
    color: colors.textColor,
    fontSize: 19,
    marginTop: 20,
  },

  subtitle: {
    color: colors.softPrimary,
    fontSize: 18,
    marginVertical: 20,
    fontWeight: '600',
  },

  border: {borderWidth: 1.5, borderColor: '#dc3545'},

  head: {
    height: 40,
    backgroundColor: '#f9dadd',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {margin: 6, color: '#000'},
});

export default Police;
