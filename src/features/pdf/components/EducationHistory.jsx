import { View } from '@react-pdf/renderer';
import React from 'react';
import { repeat } from '../../../utils/utility';
import { SectionHeading, SubSection, SubSectionList, SubSectionRow } from './Layout';

const WorkExperience = ({ firstRowGap, rowGap, userInfo }) => {
    return (
        <View>
            <SectionHeading title="Education" />
            {userInfo.map((data, index) => {
                let [schoolName, date, editor, id, fieldOfStudy, location] = repeat(null);

                if (index > 0) {
                    id = index - 1;
                    schoolName = `schoolName${id}`;
                    date = `date${id}`;
                    fieldOfStudy = `fieldOfStudy${id}`;
                    location = `location${id}`;
                    editor = `editor${id}`;
                } else {
                    schoolName = 'schoolName';
                    date = 'date';
                    fieldOfStudy = 'fieldOfStudy';
                    location = 'location';
                    editor = 'editor';
                }

                return (
                    <SubSection marginTop={index === 0 ? firstRowGap : rowGap}>
                        <SubSectionRow
                            type="bold"
                            fontSize="sm"
                            columnOne={data[schoolName]}
                            columnTwo={data[date]}
                        />
                        <SubSectionRow
                            type="italic"
                            fontSize="sm"
                            columnOne={data[fieldOfStudy]}
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
