import React, { Component } from 'react';
import PrintButton from '../../../shared/Button/PrintButton';
import FormFieldset from '../components/FormFieldset';
import FormLayout from '../components/FormLayout';
import { TextInput } from '../components/Inputs';

class Form extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <FormLayout>
                <FormFieldset
                    title="Personal Information"
                    description="Share your contact information so companies know how to reach you."
                >
                    <TextInput
                        id="email"
                        name="email-input"
                        placeholder="e.g. yorktown5@gmail.com"
                        title="Enter email info"
                        value=""
                    />
                </FormFieldset>
                <PrintButton />
            </FormLayout>
        );
    }
}

export default Form;
