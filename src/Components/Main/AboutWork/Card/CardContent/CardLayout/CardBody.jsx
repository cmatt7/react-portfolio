import React from 'react';

const CardBody = ({icon, title, text}) => {
    return (
        <div className="card-body">
            <div className="card-header">
                <i className={icon}></i>
            </div>

            <div className="card-main-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default CardBody;