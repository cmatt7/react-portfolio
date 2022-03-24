import React from 'react';
import ProjectTitle from './ProjectTitle';

const CardBody = ({img, alt, title, visit, repo}) => {
    return (
        <section className="project-card-body">
            <img className="project-card-image"
                 src={img}
                 alt={alt}
            />

            <ProjectTitle
                title={title}
                visit={visit}
                repo={repo}
            />
        </section>
    )
}

export default CardBody;