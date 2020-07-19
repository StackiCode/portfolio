import React from 'react';
import Level from './level';

const Skill = (props) => {
    let skillvalue = 0;
    switch (props.label) {
        case ('HTML'):
            skillvalue = 4;
        break;
        case ('CSS/SCSS'):
            skillvalue = 4;
        break;
        case ('ReactJS'):
            skillvalue = 3;
        break;
        case ('Adobe Illustrator CC'):
            skillvalue = 4;
        break;
    }
    let totalskillvalue = 5;
    let skillLevel = [];
    for(let i = 0; i <= totalskillvalue - 1; i++) {
        if(i <= skillvalue - 1)
            skillLevel[i] = <Level level="blue"/>;
        else
            skillLevel[i] = <Level level="white"/>;
    } 
    return (
        <div className="skill">
            <div className="skill-label">{props.label}</div>
            <div className="skill-wrap">
                {skillLevel}
            </div>
        </div>
    )
}

export default Skill;