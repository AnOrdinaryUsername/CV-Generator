import { Document, Font } from '@react-pdf/renderer';
import React from 'react';
import CV from '../components/CV';
import unicodeChar from '../components/fonts/DejaVu-Sans.Book.ttf';
import garamondBold from '../components/fonts/eb-garamond-v15-latin-700.ttf';
import garamondBoldItalic from '../components/fonts/eb-garamond-v15-latin-700italic.ttf';
import garamondItalic from '../components/fonts/eb-garamond-v15-latin-italic.ttf';
import garamond from '../components/fonts/eb-garamond-v15-latin-regular.ttf';

/**
 *  NOTE: All Garamond fonts were downloaded from here:
 *  https://google-webfonts-helper.herokuapp.com/fonts/eb-garamond?subsets=latin
 *
 *  For some reason, downloading the ttfs from Google Fonts didn't work, nor did using
 *  a Google Fonts url work either.
 */
Font.register({
    family: 'Garamond',
    fonts: [
        {
            src: garamond,
        },
        {
            src: garamondBold,
            fontWeight: 'bold',
        },
        {
            src: garamondItalic,
            fontStyle: 'italic',
        },
        {
            src: garamondBoldItalic,
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
    ],
});

// Just for these characters "❖" abd  "▪"
Font.register({
    family: 'DejaVu Sans',
    format: 'truetype',
    src: unicodeChar,
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
