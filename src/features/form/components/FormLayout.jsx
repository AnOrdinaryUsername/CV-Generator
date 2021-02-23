import React from 'react';
import './FormLayout.css';

const FormLayout = ({ children, onSubmit }) => {
    return (
        <section className="form-container">
            <form className="form form--round" onSubmit={onSubmit}>
                {children}
            </form>
        </section>
    );
};

export default FormLayout;
