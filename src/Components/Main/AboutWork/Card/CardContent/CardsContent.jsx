import React from 'react';
import CardLayout from './CardLayout/CardLayout';
import { items } from './Items';

const CardsContent = () => {
    return (
        <div className="card-page-content">
        <CardLayout 
            icon={items.icons.dynamic} 
            title={items.title.dynamic} 
            text={items.text.dynamic}
        />

        <CardLayout
            icon={items.icons.responsive} 
            title={items.title.responsive}
            text={items.text.responsive}
        />

        <CardLayout
            icon={items.icons.intuitive} 
            title={items.title.intuitive}
            text={items.text.intuitive}
        />
    </div>
    )
}

export default CardsContent;