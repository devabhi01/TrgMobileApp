import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../constants';
import { TextInput, Button } from 'react-native-paper';
import { useUserContext } from '../../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUser } from '../../utils/APIs';
import ToastManager, {Toast} from 'toastify-react-native';

const AccountPrivacy = (props) => {

    // user from global state
    const { user, jwtoken, setUser } = useUserContext()

    // collecting update info
    const [updateInfo, setUpdateInfo] = useState({
        email: user.email,
        phoneNo: user.phoneNo,
        password: "",
        cpassword: ""
    })

    // handling input change
    const handleChange = (fieldName, value) => {
        setUpdateInfo({ ...updateInfo, [fieldName]: value });
    };

    // submitting update data
    const handleSubmit = async (props) => {
        try {
            if (!updateInfo.password || !updateInfo.cpassword) throw new Error("Password field can't be empty")
            if (updateInfo.password !== updateInfo.cpassword) throw new Error("Confirm password doesn't match!")

            // updating user through api
            const res = await updateUser({ _id:user._id, ...updateInfo }, jwtoken);

            // taking updated user data
            const data = await res.json()
            // console.log(data)
            if (res.ok) {
                // async storing
                await AsyncStorage.setItem('user', JSON.stringify(data.response));

                // setting global variables
                setUser(data.response)

                Toast.success('Congrats','Profile updated successfully!')
                props.navigation.navigate('Settings')
            } else {
                throw new Error(data?.msg || "Something went wrong!")
            }
        }
        catch (error) {
            // console.log(e)
            Alert.alert("Error : ", error.message)
        }
    }   

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
            <ToastManager height={55} width={'auto'} />
            <ScrollView>
                <View style={styles.wraper}>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ color: colors.textColor, fontWeight: 500, marginBottom: 10 }}>Your Email : </Text>
                        <TextInput
                            placeholder='example@gmail.com'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            mode='outlined'
                            keyboardType='default'
                            disabled
                            style={{ marginBottom: 5 }}
                            value={updateInfo.email}
                        />
                        <Text style={{ color: 'red',textAlign:'right',fontSize:12,marginBottom:30 }}>You can't change email here.</Text>

                        <Text style={{ color: colors.textColor, fontWeight: 500, marginBottom: 10 }}>Your Phone Number : </Text>
                        <TextInput
                            placeholder='Your number...'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            keyboardType='numeric'
                            mode='outlined'
                            style={{ marginBottom: 5 }}
                            maxLength={10}
                            disabled
                            
                            value={updateInfo.phoneNo}
                            
                        />
                        <Text style={{ color: 'red',textAlign:'right',fontSize:12,marginBottom:30 }}>You can't change email here.</Text>

                        <Text style={{ color: colors.textColor, fontWeight: 500, marginBottom: 10 }}>Change Password</Text>
                        <TextInput
                            label="Enter New Password"
                            mode='outlined'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            secureTextEntry
                            maxLength={16}
                            style={{ marginBottom: 20 }}
                            value={updateInfo.password}
                            onChangeText={(text) => { handleChange('password', text) }}
                        />
                        <TextInput
                            label="Re-Enter Password"
                            mode='outlined'
                            outlineColor='#dc3545'
                            activeOutlineColor='#dc3545'
                            secureTextEntry
                            maxLength={16}
                            style={{ marginBottom: 20 }}
                            value={updateInfo.cpassword}
                            onChangeText={(text) => { handleChange('cpassword', text) }}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                mode='outlined'
                                textColor='#dc3545'
                                rippleColor={'#dc3545'}
                                onPress={()=>{handleSubmit(props)}}
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