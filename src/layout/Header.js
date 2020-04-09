import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo"/>
                <p>{ title }</p>
                <a
                    className="App-link"
                    href="https://fixer.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    XE uses fixer.io API
                </a>
            </header>
        );
    };
}

export default Header;