import React from 'react';
import './FindMe.scss';

const FindMe = () => { 
    return (
        <section className="findme-container">
            <a href="https://github.com/cmatt7" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/matheus-cruz-561958207/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://www.instagram.com/c.matt7/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </section>
    );
}

export default FindMe;