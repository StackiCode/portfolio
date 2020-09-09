import React, { Component } from 'react';
import Social from '../components/socialcontact/socialcontact';
class Footer extends Component {
    render() {
        let contactinfor = `
        Gmail: stacki.code@gmail.com \n
        or nguyenquocbaobku@gmail.com \n
        Linkedin:
        https://www.linkedin.com/in/baon-profile/\n
        Mobile: +1(669)2385174
        `
        return (
            <div className="footer" id={this.props.id}>
                <div className="footer-back">
                    <div className="footer-head">
                    CONTACT INFOMATION
                    </div>
                    <Social/>
                    <div className="footer-infor">
                    <p> {contactinfor}</p>   
                    </div>
                    <div className="footer-copyright">
                     Copyright © 2020 Bao Nguyen. All right  reserved
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;