import React from 'react';

const Level = (props) => {
    let clss = `level ${props.level}`
    return (
        <div className={clss}></div>
    )
}

export default Level;