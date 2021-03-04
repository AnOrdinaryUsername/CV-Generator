import { Document, Font } from '@react-pdf/renderer';
import React from 'react';
import CV from '../components/CV';
import unicodeChar from '../components/fonts/DejaVu-Sans.Book.ttf';
import garamondBold from '../components/fonts/eb-garamond-v15-latin-700.ttf';
import garamondBoldItalic from '../components/fonts/eb-garamond-v15-latin-700italic.ttf';
import garamondItalic from '../components/fonts/eb-garamond-v15-latin-italic.ttf';
import garamond from '../components/fonts/eb-garamond-v15-latin-regular.ttf';

// Just for this character "❖"
Font.register({
    family: 'DejaVu Sans',
    format: 'truetype',
    src: unicodeChar,
});

Font.register({
    family: 'Garamond Regular',
    format: 'truetype',
    src: garamond,
});

Font.register({
    family: 'Garamond Bold',
    format: 'truetype',
    src: garamondBold,
});

Font.register({
    family: 'Garamond Italic',
    format: 'truetype',
    src: garamondItalic,
});

Font.register({
    family: 'Garamond Bold Italic',
    format: 'truetype',
    src: garamondBoldItalic,
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
