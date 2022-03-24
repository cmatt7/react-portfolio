import React from 'react';
import RGP from '../../../Images/Community/rgplogo.png';

const ContactInformation = () => {
    return (
        <div className="info-container">
            <div className="info-area">
            
                <div className="span-div">
                    <i className="fa-solid fa-location-dot circle"></i>
                    <span>Canada, ON</span>
                </div>
                
                <div className="span-div">
                    <i className="fa-solid fa-envelope circle"></i>
                    <span>
                        matheusc039@hotmail.com
                    </span>
                </div>
            </div>

        <figure className="community-area">
            <img src={RGP} alt="RGP Digital Organization - Logo"/>
            <figcaption>
                Ram Group - Development
                
                <section className="community-buttons">
                    <a  href="https://github.com/RGP-Digital" 
                        target="_blank" 
                        rel="external noreferrer" 
                        className="contact-button github"
                    >
                        <i className="fa-brands fa-github"></i>
                        GitHub
                    </a>

                    <a  href="https://discord.gg/b9FPKd7d" 
                        target="_blank" 
                        rel="external noreferrer"
                        className="contact-button discord"
                    >
                        <i className="fa-brands fa-discord"></i>
                        Discord
                    </a>
                </section>
            </figcaption>
        </figure>
    </div>
    )
}

export default ContactInformation;