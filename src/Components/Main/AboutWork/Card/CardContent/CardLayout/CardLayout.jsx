import React from 'react';
import CardBody from './CardBody';

const CardLayout = ({icon, title, text }) => {
    return (
        <div className="card-layout">
            <div className="card-content">
                <CardBody 
                    icon={icon}
                    title={title}
                    text={text}
                />
            </div>
        </div>
    )
}

export default CardLayout;