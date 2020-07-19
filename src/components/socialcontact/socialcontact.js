import React from 'react';

const socialcontact = (props) => {
    let imgfacebook = `img-cap facebook`;
    let imglinkedin = `img-cap linkedin`;
    let imggithub = `img-cap github`;

    return (
        <div className="social">
                <div className={imgfacebook}></div>
                <div className={imglinkedin}></div>
                <div className={imggithub}></div>
        </div>
    )
}

export default socialcontact;