import React from 'react';
import '../css/components/pending.scss'
import { Spinner } from 'reactstrap';

const Pending = (props) => {
    const {marginTop, fixed}  = props
    return (
        <div className='pending' style={{minHeight:`calc(100vh - ${marginTop}px)`, position:fixed?"fixed":"static"}}>
            <div className='pending_box'>
                <Spinner color="primary" className="mb-1" style={{height:"50px", width:"50px"}}/>
                <h1 style={{color:"#ffffff", marginTop:"20px"}}>Loading...</h1>  
            </div>
        </div>
    );
}

export default Pending;
