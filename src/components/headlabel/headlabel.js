import React from 'react';

const headlabel = (props) => {
    return (
        <div className="headlabel1">
            <div className="headlabel2">
                <h1 className="label">{props.children}</h1>
            </div>
        </div>
    )
}

export default headlabel;