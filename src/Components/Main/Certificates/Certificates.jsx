import React from 'react';
import './Certificates.scss';
import CertificatesContent from './CertificatesContent/CertificatesContent';

const Certificates = () => {
    return (
        <div className="certificates-container">
            <h1>Certificates</h1>

            <CertificatesContent/>
        </div>
    )
}

export default Certificates;