import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function HomepageItemsMap(props) {
  const { items, itemsPending } = props
  return (
    <div className='d-flex justify-content-center align-items-center' style={{flexDirection:"column"}}>
        {
            itemsPending
            ?
            <div>
                Pending
            </div>
            :
            items.map(item=>{
                return(
                    <div key={item.app_id} className='universal_item'>
                        <div className='universal_item_imagebox'>
                            <img className='universal_item_image' src={item.icon} alt="" />
                        </div>
                        <div className='universal_item_infobox'>
                            <h2 className='universal_item_title m-0'>{item.app_name}</h2>
                            <div className='universal_item_subinfo'>v{item.version} By&nbsp;{item.intro}</div>
                        </div>
                        <div className='universal_item_buttonbox'>
                            <Link to={`/item/${item.app_id}`}>
                                <Button className='universal_item_button'>
                                    GET
                                </Button>
                            </Link>
                        </div>
                    </div>
                )
            })
        }
    {
        itemsPending
        ?
        null
        :
        <div className='item_dash'/>
    }
    </div>
  )
}

export default HomepageItemsMap