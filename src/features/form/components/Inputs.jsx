import React from 'react';
import './Inputs.css';

// Convert first letter in string to uppercase
const convertToProperCase = (string) => string[0].toUpperCase() + string.slice(1);

const TextInput = ({ id, name, placeholder, title, value }) => {
    return (
        <div class="input">
            <label for={id}>{convertToProperCase(id)}</label>
            <input
                autoComplete="on"
                className=""
                id={id}
                name={name} // Used for setting values in state
                pattern="[\p{L}\p{M}-]+" // https://www.regular-expressions.info/unicode.html (unicode categories)
                placeholder={placeholder}
                required
                title={title} // Tooltip on hover
                type="text"
                value={value} // Value in text
            />
        </div>
    );
};

const EmailInput = ({ id, name, placeholder, title, value }) => {
    return (
        <div class="input">
            <label for={id}>{convertToProperCase(id)}</label>
            <input
                autoComplete="on"
                className=""
                id={id}
                name={name}
                placeholder={placeholder}
                required
                title={title}
                type="email"
                value={value}
            />
        </div>
    );
};

export { TextInput, EmailInput };
