import React from 'react';
import Link from '../link/link';

const navitems = () => {
    let pos = [0, 702, 1400, 3000];
    return (
        <div className="navitems">
            <div className="navitem"><Link href="/" pos={pos[0]}>HOME</Link></div>
            <div className="navitem"><Link href="skills" pos={pos[1]}>SKILLS</Link></div> 
            <div className="navitem"><Link href="project" pos={pos[2]}>PROJECT</Link></div> 
            <div className="navitem"><Link href="contact" pos={pos[3]}>CONTACT</Link></div> 
        </div>
    )
}

export default navitems;