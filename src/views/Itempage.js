import React, {useState, useEffect} from 'react'
import { Row, Button } from 'reactstrap'
import { Colxx } from 'components/common/CustomBootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Rotate from './Rotate';
import './css/pages/itempage.scss'

function Itempage() {
  const [product, setProduct] = useState(null)
  const [enDetails, setEnDetails] = useState(false)

  useEffect(()=>{
    fetch(`/v7/appinfo.php?id=${window.location.hash.replace("#/item/","")}/`,{
      method:"GET"
    })
    .then(res=>{
      if(!res.ok){
        return Promise.reject()
      }
      return res.json()
    })
    .then(res=>{
      console.log(res.info[0])
      setProduct(res.info[0])
    })
  },[])

  return (
    <div className='item'>
      {
      product
      ?
      <Row style={{margin:"0 0 50px 0"}}>
        <Colxx xxs="12" className="d-flex justify-content-center align-items-center">
          <img className='item_image' src={product.icon} alt="" />
        </Colxx>
        <Colxx xxs="12" className="item_title">
          {product.name}
        </Colxx>
        <Colxx xxs="12" className="item_subtitle">
          By&nbsp;{product.vendor}
        </Colxx>
        <Colxx xxs="4" className="item_title_infobox">
          <div className="item_title">{product.size}</div>
          <div className="item_subtitle">Size</div>
        </Colxx>
        <Colxx xxs="4" className="item_title_infobox">
          <div className="item_title">{product.dl}</div>
          <div className="item_subtitle">Downloads</div>
        </Colxx>
        <Colxx xxs="4" className="item_title_infobox">
          <div className="item_title">{product.version}</div>
          <div className="item_subtitle">Version</div>
        </Colxx>
        
        <div className='item_dash'/>

        <Rotate product={product}/>

        <div className='item_dash'/>

        <div className="item_subtopic">Description</div>
        <h3 className='item_description_detail'>
          {
            product.description.length >= 200 && !enDetails
            ? `${product.description.substring(0, 200)}...`
            : product.description
          }
        </h3>

        <div className='item_description_readmore'>
          <Button className='item_description_readmore_button' onClick={()=>setEnDetails(!enDetails)}>
            {!enDetails?"Read more...":"Collapse"}
          </Button> 
        </div>

        <div className='item_dash'/>

        <div>
          <div className="item_subtopic">Information</div>
          <div>
            <div className='d-flex'>
              <h3 className='d-flex justify-content-end item_information_title'>Developer:</h3>
              <h3 className='d-flex justify-content-start item_information_detail'>{product.vendor}</h3>
            </div>
            <div className='d-flex'>
              <h3 className='d-flex justify-content-end item_information_title'>Categories:</h3>
              <h3 className='d-flex justify-content-start item_information_detail'>{product.cate}</h3>
            </div>
            <div className='d-flex'>
              <h3 className='d-flex justify-content-end item_information_title'>Version:</h3>
              <h3 className='d-flex justify-content-start item_information_detail'>{product.version}</h3>
            </div>
            <div className='d-flex'>
              <h3 className='d-flex justify-content-end item_information_title'>Size:</h3>
              <h3 className='d-flex justify-content-start item_information_detail'>{product.size}</h3>
            </div>
            {/* <div className='d-flex'>
              <h3 className='d-flex justify-content-end item_information_title'>Content Rating:</h3>
              <h3 className='d-flex justify-content-start item_information_detail'>{product.vendor}</h3>
            </div> */}
            <div className='d-flex'>
              <h3 className='d-flex justify-content-end item_information_title'>Requirements:</h3>
              <h3 className='d-flex justify-content-start item_information_detail'>{product.requirements}</h3>
            </div>
          </div>
        </div>
        <div className='item_dash'/>
      </Row>
      :
      <div>pending</div>
      }
    </div>
  )
}

export default Itempage