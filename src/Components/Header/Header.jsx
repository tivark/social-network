import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://mi.by/local/mi/images/socnet-logo.png" alt=""/>
        </header>
    );
}

export default Header;