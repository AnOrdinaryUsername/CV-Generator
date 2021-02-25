import { Document } from '@react-pdf/renderer';
import React from 'react';
import CV from '../components/CV';

const PDF = ({ data }) => {
    const { personalFirstName, personalLastName } = data;
    const userName = `${personalFirstName} ${personalLastName}`;

    return (
        {
            /* 
            Basically just following this:
            https://commonlook.com/the-relevance-of-metadata-in-accessible-pdfs/
        */
        },
        (
            <Document
                author={`${userName}`}
                subject={`Curriculum Vitae for ${userName}`}
                title={`Curriculum Vitae for ${userName}`}
            >
                <CV userData={data} />
            </Document>
        )
    );
};

export default PDF;
