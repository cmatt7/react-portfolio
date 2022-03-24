import React from 'react';
import ProjectBody from './ProjectBody';

const ProjectsCards = ({img, alt, title, visit, repo}) => {
    return(
        /* Layout Start */
        <div className="projects-card">
            {/* Row Start */}
            <div className="project-card-content">
                <ProjectBody
                        img={img}
                        alt={alt}
                        title={title}
                        visit={visit}
                        repo={repo}
                />
            </div>
            {/* Row End */}
        </div>
        /* Layout End */
    )
}

export default ProjectsCards;