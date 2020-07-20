import React, { Component } from 'react';

class Aboutme extends Component {
    render() {
        let message = `
            Hi, welcome to my portfolio! \n
            My name is Bao Nguyen and i am tech| web based application enthusiast. \n
            You can scroll down and find out more about my personality as well as \n 
            stuffs i am working on.`;
        // const messageline = message.split('\n').map((text, index) => 
        //     <React.Fragment>
        //         {text}<br/>
        //     </React.Fragment>
        // )
        return ( 
            <div className="container">
            <div className="txt-container">
                <p>{message}</p>
            </div>
            <div className="dot">
            <div className="self-img"></div>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns="true" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 922.82 945.1">
            <defs>
            <pattern id="circle_3" data-name="circle_3" width="41" height="41" patternTransform="matrix(0, -1, 1.04, 0, 520.11, 561.64)" patternUnits="userSpaceOnUse" viewBox="0 0 41 41">
            <rect className="cls-1" width="41" height="41" />
            <circle className="cls-2" cx="61.5" cy="61.5" r="23.81" />
            <circle className="cls-2" cx="20.5" cy="61.5" r="23.81" />
            <circle className="cls-2" cx="-20.5" cy="61.5" r="23.81" />
            <circle className="cls-2" cx="61.5" cy="20.5" r="23.81" />
            <circle className="cls-2" cx="20.5" cy="20.5" r="23.81" />
            <circle className="cls-2" cx="-20.5" cy="20.5" r="23.81" />
            <circle className="cls-2" cx="61.5" cy="-20.5" r="23.81" />
            <circle className="cls-2" cx="20.5" cy="-20.5" r="23.81" />
            <circle className="cls-2" cx="-20.5" cy="-20.5" r="23.81" />
            </pattern>
            <pattern id="circle_3-3" data-name="circle_3" width="41" height="41" patternTransform="matrix(0, -1.49, 1.53, 0, 529.03, 536.38)" patternUnits="userSpaceOnUse" viewBox="0 0 41 41">
            <rect className="cls-1" width="41" height="41" />
            <circle className="cls-2" cx="61.5" cy="61.5" r="23.81" />
            <circle className="cls-2" cx="20.5" cy="61.5" r="23.81" />
            <circle className="cls-2" cx="-20.5" cy="61.5" r="23.81" />
            <circle className="cls-2" cx="61.5" cy="20.5" r="23.81" />
            <circle className="cls-2" cx="20.5" cy="20.5" r="23.81" />
            <circle className="cls-2" cx="-20.5" cy="20.5" r="23.81" />
            <circle className="cls-2" cx="61.5" cy="-20.5" r="23.81" />
            <circle className="cls-2" cx="20.5" cy="-20.5" r="23.81" />
            <circle className="cls-2" cx="-20.5" cy="-20.5" r="23.81" />
            </pattern>
            </defs>
            <circle className="cls-3" cx="463.55" cy="463.82" r="430.87" />
            <ellipse className="cls-4" cx="465.41" cy="477.55" rx="269.27" ry="273.67" />
            <ellipse className="cls-5" cx="461.41" cy="472.55" rx="394.41" ry="405.55" />
            </svg>
            </div>
            </div>
      )
    }
}

export default Aboutme;