import React from 'react';
import ProjectsCards from './ProjectsCard/ProjectsCards';
import { items } from './Items';

const ProjectsContent = () => {
    return (
        <div className="project-content">
            <ProjectsCards 
                img={items.gym.img}
                title={items.gym.title}
                visit={items.gym.visit}
                repo={items.gym.repo}
            />

            <ProjectsCards 
                img={items.spotify.img}
                title={items.spotify.title}
                visit={items.spotify.visit}
                repo={items.spotify.repo}
            />

            <ProjectsCards 
                img={items.netflix.img}
                title={items.netflix.title}
                visit={items.netflix.visit}
                repo={items.netflix.repo}
            />

            <ProjectsCards 
                img={items.spotify.img}
                title={items.spotify.title}
                visit={items.spotify.visit}
                repo={items.spotify.repo}
            />
        </div>
    )
}

export default ProjectsContent;