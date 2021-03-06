import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Buttons.css';

const GoBackButton = ({ onClick }) => {
    return (
        <button className="button go-back" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
        </button>
    );
};

const DownloadButton = () => {
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

const ResetFormButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="button reset-form">
            Reset Form
        </button>
    );
};

export { GoBackButton, DownloadButton, SubmitButton, ResetFormButton };
