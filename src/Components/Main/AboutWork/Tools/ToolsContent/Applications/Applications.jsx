import React from 'react';
import { info } from '../../Info';

const Applications = () => {
    return (
        /* Layout Start */
        <div className="tools-layout">
            {/* Row Start */}
            <figure className="tools-image-content">
                <img src={info.applications.images.vue} alt={info.applications.alt.vue} className="tools-image"/>
                <img src={info.applications.images.js} alt={info.applications.alt.js} className="tools-image"/>
                <img src={info.applications.images.react} alt={info.applications.alt.react} className="tools-image"/>
                <img src={info.applications.images.sass} alt={info.applications.alt.sass} className="tools-image"/>

                <figcaption className="tools-image-text">
                    {info.applications.text}
                </figcaption>
            </figure>
            {/* Row End */}
        </div>
        /* Layout End */
    )
}

export default Applications;