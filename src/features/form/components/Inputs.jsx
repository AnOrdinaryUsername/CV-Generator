import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import uniqid from 'uniqid';
import '../../../shared/Button/PrintButton.css';
import CustomEditor from '../components/CustomEditor';
import './Inputs.css';

// isRequired, onChange, type
const Input = ({
    animation,
    initialValue = '',
    isRequired,
    label,
    name,
    onChange,
    placeholder,
    type,
    value,
}) => {
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
        case 'tel':
            inputProps.type = 'tel';
            break;
        // Custom Editor from react-quill
        case 'editor':
            break;
        default:
            throw new Error('Unknown input type passed to <Input />.');
    }

    let input = null;
    const id = uniqid();

    if (type === 'editor') {
        input = <CustomEditor id={id} initialValue={initialValue} placeholder={placeholder} />;
    } else {
        input = (
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
        );
    }

    return (
        <div className={`input ${animation}`}>
            <label htmlFor={id}>{label}</label>
            {input}
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
