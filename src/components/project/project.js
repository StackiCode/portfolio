import React from 'react';

const Project = (props) => {
    let clss = `project-frame ${props.clss}`;
    return (
        <div className={clss}>
            {props.children}
        </div>
    )
}

export default Project;