import './Inputs.css';

const TextInput = ({ name, placeholder, title, value }) => {
    return (
        <input
            autoComplete="on"
            className=""
            name={name} // Used for setting values in state
            pattern="[\p{L}\p{M}-]+" // https://www.regular-expressions.info/unicode.html (unicode categories)
            placeholder={placeholder}
            required
            title={title} // Tooltip on hover
            type="text"
            value={value} // Value in text
        />
    );
};

const EmailInput = ({ name, placeholder, title, value }) => {
    return (
        <input
            autoComplete="on"
            className=""
            name={name}
            placeholder={placeholder}
            required
            title={title}
            type="email"
            value={value}
        />
    );
};

export { TextInput, EmailInput };
