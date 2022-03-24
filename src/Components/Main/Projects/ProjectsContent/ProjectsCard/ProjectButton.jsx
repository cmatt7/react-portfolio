import React from 'react';

const CardButton = ({visit, repo}) => {
    return (
        <div className="project-card-button">
            <a href={visit} target="_blank" rel="noreferrer">
                <button className="visit-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Visit
                </button>
            </a>

            <a href={repo} target="_blank" rel="noreferrer">
                <button className="repo-button">
                    <i className="fa-brands fa-github"></i>
                    Repository
                </button>
            </a>
        </div>
    )
}

export default CardButton;