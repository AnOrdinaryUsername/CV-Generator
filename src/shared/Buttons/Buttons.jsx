import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Buttons.css';

const PrintButton = () => {
    const printPage = () => window.print();

    return (
        <button className="button button--md print" onClick={printPage}>
            <FontAwesomeIcon icon={faPrint} />
            Print page
        </button>
    );
};

const DownloadButton = ({ firstName, lastName }) => {
    return (
        <button className="button button--md download">
            <FontAwesomeIcon icon={faDownload} />
            Download as PDF
        </button>
    );
};

const SubmitButton = () => {
    return <button className="button submit">Submit</button>;
};

export { PrintButton, DownloadButton, SubmitButton };
