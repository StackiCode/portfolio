import React, { Component } from 'react';
import Headlabel from '../components/headlabel/headlabel';
import Skill from '../components/skill/skill';

class Skills extends Component {
    render() {
        return (
            <div className="skills" id={this.props.id}>
                <Headlabel>SKILLS</Headlabel>
                <div className="skills-back">
                    <Skill label="HTML,CSS/SCSS"/>
                    <Skill label="Javascript"/>                    
                    <Skill label="Java"/>                    
                    <Skill label="Python,C++"/>                    
                </div>
            </div>
        )
    }
}

export default Skills;