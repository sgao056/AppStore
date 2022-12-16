import React from 'react'
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import '../css/components/itemHeader.scss'

function ItemHeader(props) {

  const handleDownload = () => {
      const w = window.open('about:blank');
      w.location.href=`https://eapp.iphonecake.com/install.php?id=${window.location.hash.replace("#/item/","")}`  
  }
  
  return (
    <div className='item_header'>
      <div className='item_menu d-flex align-items-center justify-content-start pl-2'>
            <Button 
            className='item_menu_button d-flex justify-content-center align-items-center'
            onClick={()=>{
              props.history.push("/latest")
            }}>
                <div style={{transform:"scale(2)",paddingLeft:"20px"}} className="d-flex align-items-center justify-content-start w-100">
                    <i className='simple-icon-menu item_menu_button_icon'/><h6 className='m-0 p-0' style={{fontSize:"8px"}}>&nbsp;&nbsp;Latest</h6>  
                </div>
            </Button>
        </div>
        <div className='item_title h-100'>
            <h1 className='m-0 p-0'>            
                AppCake
            </h1>
        </div>
        <div className='item_download d-flex align-items-center justify-content-end pr-2'>
            <Button onClick={handleDownload} className='item_download_button'>Install</Button>
        </div>
    </div>
  )
}

export default withRouter(ItemHeader)