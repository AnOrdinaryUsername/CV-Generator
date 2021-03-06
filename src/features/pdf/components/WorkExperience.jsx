import { View } from '@react-pdf/renderer';
import React from 'react';
import { repeat } from '../../../utils/utility';
import { SectionHeading, SubSection, SubSectionList, SubSectionRow } from './Layout';

const WorkExperience = ({ firstRowGap, rowGap, userInfo }) => {
    return (
        <View>
            <SectionHeading title="Work Experience" />
            {userInfo.map((data, index) => {
                let [companyName, date, editor, id, jobTitle, location] = repeat(null);

                if (index > 0) {
                    id = index - 1;
                    companyName = `companyName${id}`;
                    date = `date${id}`;
                    jobTitle = `jobTitle${id}`;
                    location = `location${id}`;
                    editor = `editor${id}`;
                } else {
                    companyName = 'companyName';
                    date = 'date';
                    jobTitle = 'jobTitle';
                    location = 'location';
                    editor = 'editor';
                }

                return (
                    <SubSection marginTop={index === 0 ? firstRowGap : rowGap}>
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
                        <SubSectionList data={data[editor]} />
                    </SubSection>
                );
            })}
        </View>
    );
};

export default WorkExperience;
