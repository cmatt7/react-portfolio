import React from 'react';
import Logo from '../../../Images/Logo/logo.png';

const ContactArea = () => {
    return (
        <div className="reach-content">
            <h1 className="contact-title">
                I'm interested in your work, <br/>
                where may I reach you?
                </h1>

            <a 
                href="mailto:matheusc039@hotmail.com" 
                target="_blank" 
                rel="external noreferrer"
                className="contact-button"
            >
                Let's talk
                <i className="fa-solid fa-handshake"></i>
            </a>

            <img src={Logo} alt="Matt - Logo"/>
        </div>
    )
}

export default ContactArea;