import React, { Component } from 'react';
import Social from '../components/socialcontact/socialcontact';
class Footer extends Component {
    render() {
        let contactinfor = `
        Gmail: stacki.code@gmail.com \n
        or nguyenquocbaobku@gmail.com \n
        Linkedin:
        https://www.linkedin.com/in/baon-profile/\n
        Mobile: +84835020777
        `
        return (
            <div className="footer">
                <div className="footer-back">
                    <div className="footer-head">
                    CONTACT INFOMATION
                    </div>
                    <Social/>
                    <div className="footer-infor">
                    <p> {contactinfor}</p>   
                    </div>
                    <div className="footer-copyright">
                     Copyright © 2020 Alex Nguyen. All right  reserved
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;