import React from 'react';
import ProjectButton from './ProjectButton';

const CardTitle = ({title, visit, repo}) => {
    return (
        <div className="project-card-title-box">
            <div className="project-card-title">
                <h3>{title}</h3>

                <ProjectButton visit={visit}
                            repo={repo}
                />
            </div>
        </div>
    )
}

export default CardTitle;