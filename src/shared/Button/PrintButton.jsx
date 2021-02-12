import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PrintButton.css';

const PrintButton = () => {
    const printPage = () => window.print();

    return (
        <button className="button button--md print" onClick={printPage}>
            <FontAwesomeIcon icon={faPrint} />
            Print page
        </button>
    );
};

export default PrintButton;
