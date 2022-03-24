import React from 'react';
import CardContent from './CardContent/CardsContent';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="card-container">
            <CardContent />
        </div>        
    )
}

export default Card;