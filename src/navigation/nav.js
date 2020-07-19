import React, { Component } from 'react';
import Btnmenu from '../components/button/btnmenu';
import Blur from '../components/blur/blur';
import Sidemenu from '../components/sidemenu/sidemenu';
import Navitems from '../components/navitems/navitems';

class Navigation extends Component {
    state = {
        open: false,
        anm_side: "anm_sidemenu_close",
        anm_btn: {
          bar1: "",
          bar2: "",
          bar3: ""
        },
        anm_blur: "",
      };
    
    clickHandler = () => {
        const state = this.state;
        const anm_btn = this.state.anm_btn;
        let anm_blur = this.state.anm_blur;
        this.setState({open: !state.open});
        if(state.open === false) {
            anm_btn.bar1 = "bar1";
            anm_btn.bar2 = "bar2";
            anm_btn.bar3 = "bar3";
            anm_blur = "blur_anm";
            this.setState({anm_side: "anm_sidemenu_draw",
                        anm_btn: anm_btn,
                        anm_blur: anm_blur});
        } else {
            anm_btn.bar1 = "";
            anm_btn.bar2 = "";
            anm_btn.bar3 = "";
            anm_blur = "";
            this.setState({anm_side: "anm_sidemenu_close",
                        anm_btn: anm_btn,
                        anm_blur: anm_blur});
        }
    }
    render() {
        return (
            <div className="nav">
                <Btnmenu click={this.clickHandler} anm={this.state.anm_btn}/>
                <Blur anm={this.state.anm_blur}/>
                <Sidemenu sd_class={this.state.anm_side}/>
                <Navitems/>
            </div>
    )}
}

export default Navigation;