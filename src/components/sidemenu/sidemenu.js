import React from 'react';
import Link from '../link/link'

const Sidemenu = (props) => {
    const anmSide = `side_bar ${props.sd_class}`;
    let pos = [0, 702, 1400, 3000];
    return (
        <div className={anmSide}>
            <div className="side_item1"><Link href="/" pos={pos[0]}>About me</Link></div>
            <div className="side_item2"><Link href="skills" pos={pos[1]}>Skills</Link> </div>
            <div className="side_item3"><Link href="project" pos={pos[2]}>Project</Link></div>
            <div className="side_item4"><Link href="Contact" pos={pos[3]}>Contact</Link></div>
        </div>
    )
}

export default Sidemenu;