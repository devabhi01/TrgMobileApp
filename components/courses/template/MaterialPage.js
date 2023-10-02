import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native-paper';
import { colors } from '../../../constants';

const MaterialPage = () => {

    return (
        <View style={{ paddingHorizontal: 30 }}>
            <View style={{ marginVertical: 10 }}>
                <TouchableOpacity onPress={openPdf}>
                    <Text style={styles.textBtn}>Syllabus</Text>
                </TouchableOpacity>
                {/* Add similar buttons for other materials */}
                {/* ... */}
                <View style={{ alignItems: 'center', marginVertical: 30 }}>
                    <Button
                        mode="outlined"
                        textColor="#dc3545"
                        rippleColor="#dc3545"
                        onPress={() => { }}
                        style={{
                            width: 200,
                            borderWidth: 2,
                            borderColor: '#dc3545',
                            borderRadius: 10,
                        }}
                    >
                        Buy Now
                    </Button>
                </View>

            </View>
        </View>
    );
};

export default MaterialPage;

const styles = StyleSheet.create({
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
    buybtn: {},
    btextbtn: {},
});
