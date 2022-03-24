import React from 'react';
import Introduction from './Introduction/Introduction';
import FindMe from './FindMe/FindMe';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <FindMe />
            <Introduction />
        </header>
    );
}

export default Header;