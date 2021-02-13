import React from 'react';
import './FormLayout.css';

const FormLayout = ({ children }) => {
    return (
        <section className="form-container">
            <form className="form form--round">{children}</form>
        </section>
    );
};

export default FormLayout;
