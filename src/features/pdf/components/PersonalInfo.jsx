import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    section: {
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    name: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1.2,
    },
    details: {
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 16,
        justifyContent: 'flex-start',
    },
});

const PersonalInfo = ({ userInfo }) => {
    const {
        personalLastName,
        personalFirstName,
        personalEmail,
        personalPhoneNumber,
        personalResidence,
    } = userInfo;

    return (
        <View style={styles.section}>
            <Text style={styles.name}>{`${personalFirstName} ${personalLastName}`}</Text>
            <View style={styles.details}>
                <Text>{personalEmail}</Text>
                <Text> ❖ {personalPhoneNumber} ❖ </Text>
                <Text>{personalResidence}</Text>
            </View>
        </View>
    );
};

export default PersonalInfo;
