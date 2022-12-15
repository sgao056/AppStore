import React from 'react'
import { Button } from 'reactstrap'
import '../css/components/homeHeader.scss'

function HomeHeader(props) {
  const {menuModalOpen, setMenuModalOpen} = props
  return (
    <div className='home_header'>
        <div className='home_menu d-flex align-items-center'>
            <Button 
            className='home_menu_button'
            onClick={()=>{setMenuModalOpen(!menuModalOpen)}}>
                <div style={{transform:"scale(2)"}} className="d-flex align-items-center justify-content-center">
                    <i className='simple-icon-menu home_menu_button_icon'/>    
                </div>
            </Button>
        </div>
        <div className='home_title w-100 h-100'>
            <h1 className='m-0 p-0'>            
                AppCake
            </h1>
        </div>
    </div>
  )
}

export default HomeHeader