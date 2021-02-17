import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../shared/Button/PrintButton.css';
import './Inputs.css';

// isRequired, onChange, type
const Input = ({ animation, id, isRequired, label, name, onChange, placeholder, type, value }) => {
    const inputProps = {};

    switch (type) {
        case 'text':
            // Allows all language characters.
            inputProps.pattern = '^\\p{L}*$';
            inputProps.type = 'text';
            break;
        case 'email':
            inputProps.type = 'email';
            break;
        case 'phone':
            inputProps.type = 'phone';
            break;
        default:
            throw new Error('Unknown input type passed to <Input />.');
    }

    return (
        <div className={`input ${animation}`}>
            <label htmlFor={id}>{label}</label>
            <input
                autoComplete="on"
                id={id}
                name={name} // Used for setting values in state
                placeholder={placeholder}
                required={isRequired}
                value={value} // Value in text
                {...inputProps}
                onChange={onChange}
            />
        </div>
    );
};

const NewInfoButton = ({ onClick }) => {
    return (
        <button className="button button--md new-info" onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} />
            Add more information
        </button>
    );
};

export { Input, NewInfoButton };
