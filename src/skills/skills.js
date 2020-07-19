import React, { Component } from 'react';
import Headlabel from '../components/headlabel/headlabel';
import Skill from '../components/skill/skill';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <Headlabel>SKILLS</Headlabel>
                <div className="skills-back">
                    <Skill label="HTML"/>
                    <Skill label="CSS/SCSS"/>                    
                    <Skill label="ReactJS"/>                    
                    <Skill label="Adobe Illustrator CC"/>                    
                </div>
            </div>
        )
    }
}

export default Skills;