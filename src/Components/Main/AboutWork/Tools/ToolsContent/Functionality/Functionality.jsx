import React from 'react';
import { info } from '../../Info';

const Functionality = () => {
    return (
        <section className="tools-layout">
            <figure className="tools-image-content">
                <img src={info.functionality.images.sql} alt={info.functionality.alt.sql} className="tools-image"/>
                <img src={info.functionality.images.laravel} alt={info.functionality.alt.laravel} className="tools-image"/>
                <img src={info.functionality.images.git} alt={info.functionality.alt.git} className="tools-image"/>

                <figcaption className="tools-image-text">
                    {info.functionality.text}
                </figcaption>
            </figure>
        </section>
    )
}

export default Functionality;