import React, { useState } from 'react';
import './Menu.scss';

const Menu = ({setPage}) => {
    const [isMobile, setIsMobile] = useState(true);

    return (
        <nav className="menu-container">
            <ul className={`menu-list ${!isMobile ? 'active' : ''}`}>
                <li 
                    className="menu-items"
                    onClick={() => setPage('about')}
                >
                    <i className="fa-solid fa-mug-saucer"></i>
                    About
                </li>

                <li
                    className="menu-items"
                    onClick={() => setPage('projects')}
                >
                    <i className="fa-regular fa-folder-open"></i>
                    Projects
                </li>

                <li 
                    className="menu-items"
                    onClick={() => setPage('certificates')}
                >
                    <i className="fa-solid fa-graduation-cap"></i>
                    Certificates
                </li>
            </ul>
            
            <button 
                className="mobile-menu"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className="fas fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
        </nav>
    )
}

export default Menu;