import React, {  useEffect } from 'react'

const Advertisement = () => {
    useEffect(()=>{
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'Advertisement.js';
        document.head.appendChild(script);
    },[])
    return (
        <div id="advertisement"/>
    );
}

export default Advertisement;