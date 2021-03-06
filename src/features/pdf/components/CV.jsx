import { Page, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExperience';
//import EducationHistory from './EducationHistory';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        padding: 36,
        width: '100%',
    },
});

const CV = ({ userData }) => {
    const FIRST_ROW_GAP = 8;
    const ROW_GAP = 14;

    return (
        <Page style={styles.page}>
            <PersonalInfo userInfo={userData.personal[0]} />
            <WorkExperience userInfo={userData.work} firstRowGap={FIRST_ROW_GAP} rowGap={ROW_GAP} />
        </Page>
    );
};

export default CV;
