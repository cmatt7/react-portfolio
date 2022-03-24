import React from 'react';
import './Button.scss';

const Button = () => {
    return (
        <div className="button-container">
            <a href="#main" rel="noreferrer">
                <button className="button-content meet-work">
                        <i className="fa-solid fa-angles-down"></i>
                        Meet my work
                </button>
            </a>

            <a href="mailto:matheusc039[remove]hotmail.com?" rel="noreferrer">
                <button className="button-content hire-me">
                    Hire me
                    <i className="fa-solid fa-arrow-pointer"></i>
                </button>
            </a>
        </div>
    );
}

export default Button;