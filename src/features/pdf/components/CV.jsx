import { Page, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import PersonalInfo from './PersonalInfo';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 36,
        width: '100%',
    },
});

const CV = ({ userData }) => {
    return (
        <Page style={styles.page}>
            <PersonalInfo userInfo={userData.personal[0]} />
        </Page>
    );
};

export default CV;
