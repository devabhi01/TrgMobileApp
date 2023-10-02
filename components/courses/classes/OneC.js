import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,

} from 'react-native'

import React, { useState } from 'react'
import PDFView from 'react-native-pdf';
import { colors } from "../../../constants";
import { Button } from 'react-native-paper';


const OneC = () => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
            <ScrollView>
                <Image style={styles.img} source={require('../img/cbse_pos.png')} />
                <View style={styles.container}>
                    <View style={{ paddingHorizontal: 30 }}>
                        <View style={{ marginVertical: 10 }}>

                            <TouchableOpacity >
                                <Text style={styles.textBtn}>Syllabus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textBtn}>Book</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textBtn}>Notes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textBtn}>Study Material</Text>
                            </TouchableOpacity>

                            <View style={{ alignItems: 'center', marginVertical: 30, }}>
                                <Button
                                    mode='outlined'
                                    textColor='#dc3545'
                                    rippleColor={'#dc3545'}
                                    onPress={() => { }}
                                    style={{ width: 200, borderWidth: 2, borderColor: '#dc3545', borderRadius: 10, }}

                                >Buy Now</Button>
                            </View>

                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default OneC

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

});