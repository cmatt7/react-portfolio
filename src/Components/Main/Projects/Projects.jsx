import React from 'react';
import ProjectsContent from './ProjectsContent/ProjectsContent'; 
import './Projects.scss';

const Projects = () => {
    return (
        <div className="project-container">
            <h1>Projects</h1>

            <ProjectsContent/>
        </div>
    );
}

export default Projects;