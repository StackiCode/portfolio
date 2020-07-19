import React from 'react';

const Sidemenu = (props) => {
    const anmSide = `side_bar ${props.sd_class}`;
    return (
        <div className={anmSide}>
            <div className="side_item1">About me</div>
            <div className="side_item2">Skills </div>
            <div className="side_item3">Project</div>
            <div className="side_item4">Contact</div>
            <div className="side_item5">More infor</div>
        </div>
    )
}

export default Sidemenu;