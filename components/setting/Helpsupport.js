import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Linking, Image } from 'react-native'
import React from 'react'
import { colors } from '../../constants';
import { ElevationLevels } from 'react-native-paper/lib/typescript/types';

const Helpsupport = () => {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:colors.graylight  }}>
            
            <ScrollView>
                <View style={styles.wraper}>
                    <View style={{ marginVertical: 30 }}>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.btn}>
                            <Image
                                style={{ width: 22, height: 22 }}
                                color={'#dc3545'}
                                source={require('../../assets/img/help.png')}
                            />
                            <Text style={styles.btnText}>Help</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity
                                onPress={() => { }}
                                disabled
                                style={styles.btn}>
                                <Image
                                    style={{ width: 22, height: 22 }}
                                    color={'#dc3545'}
                                    source={require('../../assets/img/support.png')}
                                />
                                <Text style={styles.btnText}>Support</Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => Linking.openURL('tel:+917290901622')}
                                    style={{ borderBottomWidth: 2, borderColor: colors.primary, marginLeft: 60 }}>
                                    <Text style={styles.btnText1}><Text style={{fontWeight:500}}>Phone Number : </Text> 7290901622</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ borderBottomWidth: 2, borderColor: colors.primary, marginLeft: 60, marginVertical: 20 }}
                                    onPress={() => Linking.openURL('mailto: a1abhishek2016@gmail.com')}>
                                    <Text style={styles.btnText1}><Text style={{fontWeight:500}}>Email : </Text> a1abhishek2016@gmail.com </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ borderBottomWidth: 2, borderColor: colors.primary, marginLeft: 60, marginBottom: 20 }}
                                    onPress={() => {}}>
                                    <Text style={styles.btnText1}><Text style={{fontWeight:500}}>Address : </Text></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Helpsupport

const styles = StyleSheet.create({
    wraper: {
        // marginTop: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.graylight,
        paddingHorizontal: 20,
        paddingBottom: 265
    },
    btn: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,

    },
    btnText: {
        paddingHorizontal: 20,
        fontSize: 20,
        color: colors.primary,
    },
    btnText1: {
        paddingLeft: 10,
        fontSize: 16,
        paddingVertical: 8,
        color: colors.primary,

    },
})