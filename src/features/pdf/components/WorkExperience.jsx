import { View } from '@react-pdf/renderer';
import React from 'react';
import { repeat } from '../../../utils/utility';
import { SectionHeading, SubSection, SubSectionRow } from './Layout';

const WorkExperience = ({ userInfo }) => {
    return (
        <View>
            <SectionHeading title="Work Experience" />
            {userInfo.map((data, index) => {
                let id = null;
                let [companyName, date, jobTitle, location] = repeat(null);

                if (index > 0) {
                    id = index - 1;
                    companyName = `companyName${id}`;
                    date = `date${id}`;
                    jobTitle = `jobTitle${id}`;
                    location = `location${id}`;
                } else {
                    companyName = 'companyName';
                    date = 'date';
                    jobTitle = 'jobTitle';
                    location = 'location';
                }

                return (
                    <SubSection>
                        <SubSectionRow
                            type="bold"
                            fontSize="sm"
                            columnOne={data[companyName]}
                            columnTwo={data[date]}
                        />
                        <SubSectionRow
                            type="italic"
                            fontSize="sm"
                            columnOne={data[jobTitle]}
                            columnTwo={data[location]}
                        />
                    </SubSection>
                );
            })}
        </View>
    );
};

export default WorkExperience;
