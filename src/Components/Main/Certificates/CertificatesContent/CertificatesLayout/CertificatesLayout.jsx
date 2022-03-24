import React from 'react';

const CertificatesLayout = ({image, icon, title, description, reflink, reftitle}) => {
    return (
        <figure className="certificates-layout">
            <img
                className="certificates-image" 
                src={image} 
                alt="Front-End Engineer - Certificate"
            />
            <figcaption className="certificates-layout-details">
                <h2 className="certificates-image-title">
                    <img
                        className="certificates-image-icon" 
                        src={icon} 
                        alt=""
                    />
                    {title}
                </h2>
                
                <span className="certificates-image-description">
                    {description}
                </span>

                <a 
                    className="link-reference"
                    href={reflink}
                    target="_blank"
                    rel="external noreferrer"
                >
                        {reftitle}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </figcaption>
        </figure>
    )
}

export default CertificatesLayout;