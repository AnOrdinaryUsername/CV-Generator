import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    section: {
        alignItems: 'baseline',
        borderBottom: '0.1 solid #000000',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 4,
        justifyContent: 'flex-start',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.2,
    },
    details: {
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 16,
        fontWeight: 'light',
        justifyContent: 'flex-start',
    },
    specialCharacter: {
        fontFamily: 'DejaVu Sans',
        marginLeft: 4,
        marginRight: 4,
    },
});

const PersonalInfo = ({ userInfo }) => {
    const { lastName, firstName, email, phoneNumber, residence } = userInfo;

    // This unicode character "❖".
    const blackDiamond = String.fromCharCode(0x2756);

    return (
        <View style={styles.section}>
            <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
            <View style={styles.details}>
                <Text>{email}</Text>
                <View style={styles.details}>
                    <Text style={styles.specialCharacter}>{blackDiamond}</Text>
                    <Text>{phoneNumber}</Text>
                    <Text style={styles.specialCharacter}>{blackDiamond}</Text>
                </View>
                <Text>{residence}</Text>
            </View>
        </View>
    );
};

export default PersonalInfo;
