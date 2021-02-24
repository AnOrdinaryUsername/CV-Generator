import { faDownload, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
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
    const downloadPdf = () => {
        const display = document.getElementById('pdf-container');

        html2canvas(display).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const pdf = new jsPDF();

            const imageProps = pdf.getImageProperties(image);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;

            pdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${firstName}${lastName}CV.pdf`);
        });
    };

    return (
        <button className="button button--md download" onClick={downloadPdf}>
            <FontAwesomeIcon icon={faDownload} />
            Download as PDF
        </button>
    );
};

const SubmitButton = () => {
    return <button className="button submit">Submit</button>;
};

export { PrintButton, DownloadButton, SubmitButton };
