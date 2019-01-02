import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from '../logo.svg';

const Header = props => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button color="danger">Danger!</Button>
        </header>

    )
}

export default Header;