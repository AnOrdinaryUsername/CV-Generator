import React, { Component } from 'react';
import ColorThemeButton from '../components/ColorThemeButton';

const root = document.documentElement;

class Header extends Component {
    constructor() {
        super();

        this.state = {
            isLightTheme: true,
        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        this.setState(
            {
                isLightTheme: !this.state.isLightTheme,
            },
            () => {
                const theme = this.state.isLightTheme ? 'light' : 'dark';
                root.setAttribute('data-theme', theme);
            }
        );
    }

    render() {
        const { isLightTheme } = this.state;

        return (
            <header>
                <ColorThemeButton themeState={isLightTheme} clickHandler={this.changeTheme} />
            </header>
        );
    }
}

export default Header;
