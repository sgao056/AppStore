import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Pending from './Pending'

function HomepageItemsMap(props) {
  const { items, itemsPending, tweaked, itemMapList } = props

  const handleDownload = (id) => {
    if(tweaked){
        const w = window.open('about:blank');
        w.location.href=`https://eapp.iphonecake.com/tw_install.php?id=${id}`
    }
    else{
        const w = window.open('about:blank');
        w.location.href=`https://eapp.iphonecake.com/install.php?id=${id}`
    }
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{flexDirection:"column"}}>
        {
            itemsPending
            ?
            <div>
                <Pending marginTop={60}/>
            </div>
            :
            <>
            {
            itemMapList
            ?
            // search data
            itemMapList.map(item=>{
                return(
                    tweaked
                    ?
                    <div key={item.app_id} className='universal_item'>
                        <div className='universal_item_imagebox'>
                            <img className='universal_item_image' src={item.icon} alt="" />
                        </div>
                        <div className='universal_item_infobox'>
                            <h2 className='universal_item_title m-0'>{item.name}</h2>
                            <div className='universal_item_subinfo'>v{item.ver} By&nbsp;{item.seller}</div>
                        </div>
                        <div className='universal_item_buttonbox'>
                            <Button
                            onClick={()=>{handleDownload(item.id)}}
                            className='universal_item_button'>
                            GET
                            </Button>
                        </div>
                    </div>
                    :
                    <Link to={`/item/${item.id}`} key={item.app_id} className='universal_item'>
                        <div className='universal_item_imagebox'>
                            <img className='universal_item_image' src={item.icon} alt="" />
                        </div>
                        <div className='universal_item_infobox'>
                            <h2 className='universal_item_title m-0'>{item.name}</h2>
                            <div className='universal_item_subinfo'>v{item.ver} By&nbsp;{item.seller}</div>
                        </div>
                        <div className='universal_item_buttonbox'>
                            <Button
                            onClick={()=>{handleDownload(item.id)}}
                            className='universal_item_button'>
                            GET
                            </Button>
                        </div>
                    </Link>
                )
            })
            :
            // homepage data
            items.map(item=>{
                return(
                    tweaked
                    ?
                    <div key={item.app_id} to={`/item/${item.app_id}`} className='universal_item'>
                        <div className='universal_item_imagebox'>
                            <img className='universal_item_image' src={item.icon} alt="" />
                        </div>
                        <div className='universal_item_infobox'>
                            <h2 className='universal_item_title m-0'>{item.app_name}</h2>
                            <div className='universal_item_subinfo'>v{item.version} By&nbsp;{item.intro}</div>
                        </div>
                        <div className='universal_item_buttonbox'>
                            <Button
                            onClick={()=>handleDownload(item.app_id)}
                            className='universal_item_button'>
                                GET
                            </Button>
                        </div>
                    </div>
                    :
                    <Link key={item.app_id} to={`/item/${item.app_id}`} className='universal_item'>
                        <div className='universal_item_imagebox'>
                            <img className='universal_item_image' src={item.icon} alt="" />
                        </div>
                        <div className='universal_item_infobox'>
                            <h2 className='universal_item_title m-0'>{item.app_name}</h2>
                            <div className='universal_item_subinfo'>v{item.version} By&nbsp;{item.intro}</div>
                        </div>
                        <div className='universal_item_buttonbox'>
                            <Button
                            onClick={()=>handleDownload(item.app_id)}
                            className='universal_item_button'>
                                GET
                            </Button>
                        </div>
                    </Link>
                )
            })}
            {/* final dash */}
            {
            itemsPending
            ?
            null
            :
            <div className='item_dash'/>
            }
            </>
        }
    </div>
  )
}

export default HomepageItemsMap