import React, {useEffect, Component } from 'react';
import Headlabel from '../components/headlabel/headlabel';
import Frame from '../components/project/project';
import Btnleft from '../components/btnleft/btnleft';
import Btnright from '../components/btnright/btnright';

class Projects extends Component {
    state = {
        curProject: 1,
        curProj: `P1`,
        nextProj: ``
    }
    changeProjectHandler = (value) => {
        let clsscur = ``;
        let clssnxt = ``;
        //change to nxt project
        let cur = this.state.curProject;
        let nxt = cur + value;
        nxt = this.validateProject(nxt);
        //left right setting
        if(value < 0) {
            //cur right
            clsscur = `P${cur} anm-cur-right`;
            //nxt right
            clssnxt =  `P${nxt} anm-nxt-right`;
            setTimeout((clsscur, clssnxt) => {
                clsscur = `P${cur}`;
                clssnxt =  `P${nxt}`;
                console.log(clsscur);
                console.log(clssnxt);
                this.setState({nextProj: clssnxt});
                this.setState({curProj: clsscur});
                }
            , 300);
                
        } else if ( value > 0) {
            //cur left
            clsscur = `P${cur} anm-cur-left`;
            //nxt left
            clssnxt =  `P${nxt} anm-nxt-left`;
            setTimeout((clsscur, clssnxt) => {
                clsscur = `P${cur}`;
                clssnxt =  `P${nxt}`;
                console.log(clsscur);
                console.log(clssnxt);
                this.setState({nextProj: clssnxt});
                this.setState({curProj: clsscur});
            }
            , 300);
        }
        //set project
        this.setState({nextProj: clssnxt});
        this.setState({curProj: clsscur});
        //update to state
        this.setState({curProject: nxt})

    }
    validateProject = (nxt) => {
        if(nxt > 3) {
            nxt = 1;
        }
        else if(nxt < 1) {
            nxt = 3;
        }
        return nxt;
    }
    render() {
        return (
            <div className="project">
                <div className="project-back">
                    <Headlabel>PROJECTS</Headlabel>
                    <Btnleft click={() => this.changeProjectHandler(1)}/>
                    <Btnright click={() => this.changeProjectHandler(-1)}/>
                    <div className="frame-container">
                    <Frame clss={this.state.curProj}/>
                    <Frame clss={this.state.nextProj}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;