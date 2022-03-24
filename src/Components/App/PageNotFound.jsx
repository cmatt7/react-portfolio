import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className="error-page">
            <h1 className="text error-number">404</h1>
            <h2 className="text error-message">Page not found</h2>
            <Link
                className="redirect-link" 
                to="/"
            >
                <i className="fa-solid fa-house"></i>
                Home
            </Link>
        </section>
    )
}

export default PageNotFound;