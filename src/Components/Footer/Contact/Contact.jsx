import React from 'react';
import ContactInformation from './ContactInformation/ContactInformation';
import ContactArea from './ContactArea/ContactArea';
import './Contact.scss';

const Contact = () => {
    return(
        <section className="contact-container">
            <svg 
                className="wave-background"
                viewBox="0 0 1440 320">
                <path 
                    fill="#268491" 
                    fillOpacity="1" 
                    d="M0,96L48,128C96,160,192,224,288,208C384,192,480,96,576,90.7C672,85,768,171,864,186.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            
            <div className="contact-content">
                <ContactInformation/> 
                <ContactArea/>
            </div>
        </section>
    )
}

export default Contact;