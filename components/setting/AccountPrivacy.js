import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../constants';
import { TextInput, Button } from 'react-native-paper';


const AccountPrivacy = () => {



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
            <Text style={{ textAlign: 'center', marginVertical: 50, fontSize: 24, color: colors.white, fontWeight: 600 }}>Account & Privacy</Text>
            <ScrollView>
                <View style={styles.wraper}>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ color: colors.textColor, fontWeight: 500, marginBottom: 10 }}>Your Email : </Text>
                        <TextInput
                            placeholder='a1abhishek2016@gmail.com'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            mode='outlined'
                            keyboardType='default'
                            readOnly
                            style={{ marginBottom: 30 }}
                        />
                        <Text style={{ color: colors.textColor, fontWeight: 500, marginBottom: 10 }}>Your Phone Number : </Text>
                        <TextInput

                            placeholder='7290901622'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            keyboardType='numeric'
                            mode='outlined'
                            maxLength={10}
                            readOnly
                            style={{ marginBottom: 30 }}
                        />

                        <Text style={{ color: colors.textColor, fontWeight: 500, marginBottom: 10 }}>Change Password</Text>
                        <TextInput
                            label="Enter New Password"
                            mode='outlined'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            secureTextEntry
                            maxLength={16}
                            style={{ marginBottom: 20 }}
                        />
                        <TextInput
                            label="Re-Enter Password"
                            mode='outlined'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            secureTextEntry
                            maxLength={16}
                            style={{ marginBottom: 20 }}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                mode='outlined'
                                textColor='#dc3545'
                                rippleColor={'#dc3545'}
                                onPress={() => { }}
                                style={{ width: 200, borderWidth: 2, borderColor: '#dc3545', borderRadius: 10, }}

                            >Submit</Button>
                        </View>
                        <Text style={{ color: colors.primary, marginTop: 155 }}>Note : <Text style={{ color: colors.textColor }}>To change Email or Phone Number, Contact Support Team</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountPrivacy

const styles = StyleSheet.create({
    wraper: {
        // marginTop: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.graylight,
        paddingHorizontal: 20,
        // paddingBottom: 30
    },
})