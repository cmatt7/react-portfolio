import React from 'react';
import Card from './Card/Card';
import Tools from './Tools/Tools';
import './AboutWork.scss';

const AboutWork = () => {
    return (
        <section className="about-container">
            <div className="about-content">
                <Card />
                <Tools />
            </div>
        </section>
    );
}

export default AboutWork;