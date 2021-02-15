import React, { Component } from 'react';
import uniqid from 'uniqid';
import PrintButton from '../../../shared/Button/PrintButton';
import FormFieldset from '../components/FormFieldset';
import FormLayout from '../components/FormLayout';
import { TextInput } from '../components/Inputs';
import './Form.css';

class Form extends Component {
    constructor() {
        super();

        /*
                    field                                             inputs ( [ ] = input box)
            ╭――――――――――――――――――╮           ╭――――――――――――――――――――╮
            │     title                   │           │                                 │
            │     description            │           │     ╭―――――――――――――╮   │
            │                              │           │     │  label1    label2 │  │
            ╰――――――――――――――――――╯           │     │  [     ]    [     ] │ <-------- Row
                                                         │     ╰―――――――――――――╯   │
                                                         │                                 │
                                                         │      label3                    │
                                                         │      [                      ]   │
                                                         ╰――――――――――――――――――――╯

        */
        this.formSection = [
            {
                field: {
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
                                // Stuff that gets passed
                                id: 'first-name',
                                name: 'firstName',
                                placeholder: 'e.g. Biggy',
                            },
                            {
                                type: 'text',
                                label: 'Last Name',
                                id: 'last-name',
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
                                name: 'email',
                                placeholder: 'e.g. enterprise6@gmail.com',
                            },
                            {
                                type: 'phone',
                                label: 'Phone Number',
                                id: 'phone-number',
                                name: 'phoneNumber',
                                placeholder: 'e.g. (123) 456-7890',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        label: 'Residence',
                        id: 'residence',
                        name: 'residence',
                        placeholder: 'e.g. Newport News, US',
                    },
                ],
            },
            {
                field: {
                    title: 'Education History',
                    description:
                        'Having a degree shows an ability to learn. Althought not required, you may include it if you wish to share.',
                },
                inputs: [
                    {
                        row: [
                            {
                                type: 'text',
                                label: 'School Name',
                                // Stuff that gets passed
                                id: 'school-name',
                                name: 'schoolName',
                                placeholder: 'e.g. Harvard University',
                            },
                            {
                                type: 'text',
                                label: 'Field of Study',
                                id: 'field-of-study',
                                name: 'fieldOfStudy',
                                placeholder: 'e.g. Computer Science, B.S.',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        label: 'Date',
                        id: 'date',
                        name: 'date',
                        placeholder: 'e.g. 05/12/1938-02/17/1947',
                    },
                ],
            },
            {
                field: {
                    title: 'Work Experience',
                    description:
                        'Employers love practical experience. List all relevant work stuff.',
                },
                inputs: [
                    {
                        type: 'text',
                        label: 'Date',
                        id: 'date',
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
                {this.formSection.map((element) => {
                    return (
                        <FormFieldset
                            title={element.field.title}
                            description={element.field.description}
                            key={uniqid()}
                        >
                            {element.inputs.map((element) => {
                                if (element.row) {
                                    return (
                                        <div className="row" key={uniqid()}>
                                            {element.row.map((element) => {
                                                return (
                                                    <TextInput
                                                        label={element.label}
                                                        id={element.id}
                                                        name={element.id}
                                                        placeholder={element.placeholder}
                                                        key={uniqid()}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                }

                                return (
                                    <TextInput
                                        label={element.label}
                                        id={element.id}
                                        name={element.id}
                                        placeholder={element.placeholder}
                                        key={uniqid()}
                                    />
                                );
                            })}
                        </FormFieldset>
                    );
                })}
                <PrintButton />
            </FormLayout>
        );
    }
}

export default Form;
