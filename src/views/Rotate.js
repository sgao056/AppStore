import React from 'react'
import './css/components/rotate.scss'

function Rotate(props) {
  const { product } = props
    return (
    <div className={window.innerWidth <= 1024 ? 'd-flex rotate_nobar':'d-flex rotate'}>
        {
            product && product.screen
            ? 
            product.screen.map(cell=>{
                return(
                    <img key={cell} src={cell} alt="" className='rotate_image'/>
                )
            })
            :
            null
        }
    </div>
  )
}

export default Rotate