import React from 'react';

const Project = props => {
    console.log(props)
    return(
        <div className="project">
            <h4>{props.project.contents}</h4>
            <p>{props.project.title}</p>
        </div>
    )
}

export default Project;