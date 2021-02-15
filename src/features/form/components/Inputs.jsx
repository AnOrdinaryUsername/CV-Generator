import React from 'react';
import './Inputs.css';

const TextInput = ({ id, label, name, placeholder, value }) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input
                autoComplete="on"
                className=""
                id={id}
                name={name} // Used for setting values in state
                pattern="[\p{L}\p{M}-]+" // https://www.regular-expressions.info/unicode.html (unicode categories)
                placeholder={placeholder}
                required
                type="text"
                value={value} // Value in text
            />
        </div>
    );
};

const EmailInput = ({ id, label, name, placeholder, value }) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input
                autoComplete="on"
                className=""
                id={id}
                name={name}
                placeholder={placeholder}
                required
                type="email"
                value={value}
            />
        </div>
    );
};

export { TextInput, EmailInput };
