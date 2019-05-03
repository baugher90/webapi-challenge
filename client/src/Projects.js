import React from 'react';
import Project from './Project';

const Projects = props => {
    console.log(props)
    return(
        <div className="project-list">
            {props.projects.map(project => (
          <Project project={project} />
        ))}
        </div>
    )
}

export default Projects;