import { Document, Font } from '@react-pdf/renderer';
import React from 'react';
import CV from '../components/CV';
import cormorantBold from '../components/fonts/CormorantGaramond-Bold.ttf';
import cormorantReg from '../components/fonts/CormorantGaramond-Regular.ttf';
import unicodeChar from '../components/fonts/DejaVu-Sans.Book.ttf';

// Just for this character "❖"
Font.register({
    family: 'DejaVu Sans',
    format: 'TrueType',
    src: unicodeChar,
});

Font.register({
    family: 'Cormorant Garamond Bold',
    format: 'TrueType',
    src: cormorantBold,
});

Font.register({
    family: 'Cormorant Garamond Regular',
    format: 'TrueType',
    src: cormorantReg,
});

const PDF = ({ data }) => {
    const { firstName, lastName } = data.personal[0];
    const userName = `${firstName} ${lastName}`;

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
