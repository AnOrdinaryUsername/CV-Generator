import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ColorThemeButton = ({ themeState, clickHandler }) => {
    return (
        <button
            aria-label={themeState ? 'Activate dark theme' : 'Activate light theme'}
            onClick={clickHandler}
        >
            <FontAwesomeIcon icon={themeState ? faSun : faMoon} />
        </button>
    );
};

export default ColorThemeButton;
