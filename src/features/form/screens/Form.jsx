import React, { Component } from 'react';
import uniqid from 'uniqid';
import PrintButton from '../../../shared/Button/PrintButton';
import FormFieldset from '../components/FormFieldset';
import FormLayout from '../components/FormLayout';
import './Form.css';

class Form extends Component {
    constructor() {
        super();

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
                                id: 'first-name',
                                isRequired: true,
                                name: 'firstName',
                                placeholder: 'e.g. Biggy',
                            },
                            {
                                type: 'text',
                                label: 'Last Name',
                                id: 'last-name',
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
                                id: 'email',
                                isRequired: true,
                                name: 'email',
                                placeholder: 'e.g. enterprise6@email.com',
                            },
                            {
                                type: 'phone',
                                label: 'Phone Number',
                                id: 'phone-number',
                                isRequired: true,
                                name: 'phoneNumber',
                                placeholder: 'e.g. (123) 456-7890',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        label: 'Residence',
                        id: 'residence',
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
                        'Having a degree shows an ability to learn. Although not required, you may include it if you wish to share.',
                },
                inputs: [
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'School Name',
                                id: 'school-name',
                                isRequired: false,
                                name: 'schoolName',
                                placeholder: 'e.g. Harvard University',
                            },
                            {
                                type: 'text',
                                label: 'Field of Study',
                                id: 'field-of-study',
                                isRequired: false,
                                name: 'fieldOfStudy',
                                placeholder: 'e.g. Computer Science, B.S.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        label: 'Date',
                        id: 'date',
                        isRequired: false,
                        name: 'date',
                        placeholder: 'e.g. 05/12/1938-02/17/1947',
                    },
                ],
            },
            {
                legend: {
                    title: 'Work Experience',
                    description:
                        'Employers love practical experience. List all relevant work stuff.',
                },
                inputs: [
                    {
                        type: 'text',
                        label: 'Date',
                        id: 'date',
                        isRequired: false,
                        name: 'date',
                        placeholder: 'e.g. 05/12/1938-02/17/1947',
                    },
                ],
            },
        ];

        this.state = {};
    }

    render() {
        return (
            <FormLayout>
                {this.formSection.map((fieldsetData) => {
                    return <FormFieldset {...fieldsetData} key={uniqid()} />;
                })}
                <PrintButton />
            </FormLayout>
        );
    }
}

export default Form;
