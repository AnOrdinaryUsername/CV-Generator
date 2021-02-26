import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../shared/Buttons/Buttons.css';
import CustomEditor from '../components/CustomEditor';
import './Inputs.css';

const Input = ({
    animation,
    index,
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
            // Allows all language characters. \w allows whitespace
            inputProps.pattern = '^[\\p{L} ]*$';
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
    let identifier = index !== undefined ? `${name}${index}` : name;

    if (type === 'editor') {
        input = (
            <CustomEditor
                id={identifier}
                onChange={onChange}
                initialValue={initialValue}
                name={identifier}
                placeholder={placeholder}
            />
        );
    } else {
        input = (
            <input
                autoComplete="on"
                id={identifier}
                name={identifier} // Used for setting values in state
                placeholder={placeholder}
                required={isRequired}
                value={value} // Value in text
                {...inputProps}
                onChange={onChange}
            />
        );
    }

    return (
        <div className={animation ? `input ${animation}` : 'input'}>
            <label htmlFor={identifier}>{label}</label>
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
