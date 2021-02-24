import React from 'react';
import Layout from '../components/Layout';
import PersonalInfo from '../components/PersonalInfo';

const PDF = ({ data }) => {
    const personalInfo = {};
    const educationHistory = {};
    const workExperience = {};

    const grabData = () => {
        const userData = Object.entries(data);
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
        <Layout>
            <PersonalInfo userInfo={personalInfo} />
        </Layout>
    );
};

export default PDF;
