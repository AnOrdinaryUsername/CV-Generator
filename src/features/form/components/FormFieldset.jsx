import React from 'react';
import './FormFieldset.css';

const FormFieldset = ({ title, description, children }) => {
    return (
        <fieldset>
            <legend className="legend">
                <h2>{title}</h2>
                <p>{description}</p>
            </legend>
            <div className="input-container">{children}</div>
        </fieldset>
    );
};

export default FormFieldset;
