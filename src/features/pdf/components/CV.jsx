import { Page, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import PersonalInfo from './PersonalInfo';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#A24242',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 36,
        width: '100%',
    },
});

const CV = (props) => {
    const personalInfo = {};
    const educationHistory = {};
    const workExperience = {};

    const grabData = () => {
        const userData = Object.entries(props.userData);
        // Removes the 'isSubmitted' property from array so all we have now is the user data.
        const firstElement = userData.shift();

        for (const [key, value] of userData) {
            if (key.includes('personal')) {
                personalInfo[key] = value;
            } else if (key.includes('education')) {
                educationHistory[key] = value;
            } else if (key.includes('work')) {
                workExperience[key] = value;
            } else {
                throw new Error(
                    `Unknown property "${key}: ${value}" was passed.` +
                        'Check Form.jsx if name contains personal, education, or work.'
                );
            }
        }
    };

    grabData();

    return (
        <Page style={styles.page}>
            <PersonalInfo userInfo={personalInfo} />
        </Page>
    );
};

export default CV;
