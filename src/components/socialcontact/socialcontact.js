import React from 'react';

const socialcontact = (props) => {
    let imgfacebook = `img-cap facebook`;
    let imglinkedin = `img-cap linkedin`;
    let imggithub = `img-cap github`;
    let linkFacebook = `https://www.facebook.com/Bao.Nguyen.Quoc.45/`;
    let linkLinkedin = `https://www.linkedin.com/in/baon-profile/`;
    let linkGithub = `https://github.com/StackiCode`;
    let newPage = `_blank`;
    return (
        <div className="social">
                <a className={imgfacebook} href={linkFacebook} target={newPage}></a>
                <a className={imglinkedin} href={linkLinkedin} target={newPage}></a>
                <a className={imggithub} href={linkGithub} target={newPage}></a>
        </div>
    )
}

export default socialcontact;