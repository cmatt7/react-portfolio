import React from 'react';
import CertificatesLayout from './CertificatesLayout/CertificatesLayout';
import { items } from './Items';

const CertificatesContent = () => {
    return (
        <div className="certificates-content">
            <CertificatesLayout 
                image={items.frontend.image}
                icon={items.frontend.icon}
                title={items.frontend.title}
                description={items.frontend.description}
                reflink={items.frontend.reflink}
                reftitle={items.frontend.reftitle}
            />
        </div>
    )
}

export default CertificatesContent;