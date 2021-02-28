import React, { Component } from 'react';
import { SubmitButton } from '../../../shared/Buttons/Buttons';
import FormFieldset from '../components/FormFieldset';
import FormLayout from '../components/FormLayout';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.formSection = [
            {
                legend: {
                    title: 'Personal Information',
                    description:
                        'Share your contact information so companies know how to reach you.',
                },
                inputs: [
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'First Name',
                                isRequired: true,
                                name: 'firstName',
                                placeholder: 'e.g. Biggy',
                            },
                            {
                                type: 'text',
                                label: 'Last Name',
                                isRequired: true,
                                name: 'lastName',
                                placeholder: 'e.g. Enterprise',
                            },
                        ],
                    },
                    {
                        row: [
                            {
                                type: 'email',
                                label: 'Email address',
                                isRequired: true,
                                name: 'email',
                                placeholder: 'e.g. enterprise6@email.com',
                            },
                            {
                                type: 'tel',
                                label: 'Phone Number',
                                isRequired: true,
                                name: 'phoneNumber',
                                placeholder: 'e.g. (123) 456-7890',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        label: 'Residence',
                        isRequired: true,
                        name: 'residence',
                        placeholder: 'e.g. Newport News, US',
                    },
                ],
            },
            {
                legend: {
                    title: 'Education History',
                    description:
                        'Having a degree demonstrates an ability to learn. Although not required, you may include it if you wish to share.',
                },
                inputs: [
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'School Name',
                                isRequired: false,
                                name: 'schoolName',
                                placeholder: 'e.g. Harvard University',
                            },
                            {
                                type: 'text',
                                label: 'Field of Study',
                                isRequired: false,
                                name: 'fieldOfStudy',
                                placeholder: 'e.g. Computer Science, B.S.',
                            },
                        ],
                    },
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'Location',
                                isRequired: false,
                                name: 'location',
                                placeholder: 'e.g. Oahu, HI',
                            },
                            {
                                type: 'text',
                                label: 'Date',
                                isRequired: false,
                                name: 'date',
                                placeholder: 'e.g. May 1938 - Feb. 1947',
                            },
                        ],
                    },
                    {
                        type: 'editor',
                        label: 'Details',
                        name: 'editor',
                        placeholder:
                            'List all descriptions of important academic achievements in bullet points.',
                    },
                ],
            },
            {
                legend: {
                    title: 'Work Experience',
                    description:
                        'Employers love practical experience. Show them what skills you bring to the table.',
                },
                inputs: [
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'Company Name',
                                isRequired: false,
                                name: 'companyName',
                                placeholder: 'e.g. US Navy',
                            },
                            {
                                type: 'text',
                                label: 'Job Title',
                                isRequired: false,
                                name: 'jobTitle',
                                placeholder: 'e.g. Aircraft Carrier',
                            },
                        ],
                    },
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'Location',
                                isRequired: false,
                                name: 'location',
                                placeholder: 'e.g. Oahu, HI',
                            },
                            {
                                type: 'text',
                                label: 'Date',
                                isRequired: false,
                                name: 'date',
                                placeholder: 'e.g. May 1938 - Feb. 1947',
                            },
                        ],
                    },
                    {
                        type: 'editor',
                        label: 'Details',
                        name: 'editor',
                        placeholder:
                            'List all descriptions of applied skills and roles in bullet points.',
                    },
                ],
            },
        ];
    }

    render() {
        // Passed App state.
        const { personal, education, work } = this.props.storedInputs;
        // Arrays with object data
        const data = [personal, education, work];
        const sectionName = ['personal', 'education', 'work'];

        return (
            <FormLayout onSubmit={this.props.onSubmit}>
                {this.formSection.map((fieldsetData, index) => {
                    return (
                        <FormFieldset
                            {...fieldsetData}
                            storedInputs={data[index]}
                            sectionName={sectionName[index]}
                            onChange={this.props.onChange}
                            updateInputCount={this.props.updateInputCount}
                            key={index}
                        />
                    );
                })}
                <SubmitButton />
            </FormLayout>
        );
    }
}

export default Form;
