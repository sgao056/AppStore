import React, {  useEffect } from 'react'
import { useLocation } from 'react-router-dom'; 

const Advertisement = () => {
    const { pathname } = useLocation(); 
    useEffect(()=>{
        console.log("1")
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'Advertisement.js';
        document.head.appendChild(script);
    },[pathname])
    return (
        <div id='advertisement'/>
    );
}

export default Advertisement;