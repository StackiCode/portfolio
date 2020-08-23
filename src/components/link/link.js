import React, {useEffect} from 'react';

const Link = (props) => {

    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', props.href);
        window.scrollTo(0,props.pos);    
        
    }

    return (
            <a onClick={onClick}>
                {props.children}
            </a>
    )
}

export default Link;