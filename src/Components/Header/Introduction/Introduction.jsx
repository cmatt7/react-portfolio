import React from 'react';
import Button from './Button/Button';
import './Introduction.scss';

const Introduction = () => {
    return (
        <section className="introduction-container">
            <div className="introduction-content">
                <p><i className="fa-solid fa-terminal"></i> Hey, I'm <span className="name-highlight">Matt</span></p>
                <h2 className="introduction-title">I'm a Full Stack Developer</h2>
            </div>
            <Button />
        </section>
    );
}

export default Introduction;