import React from 'react'
import { Input } from 'reactstrap'
import "../css/components/searchbar.scss"

function SearchBar() {
  return (
    <div className='searchbar'>
        <Input 
        className='searchbar_input h-100'
        placeholder='Search'
        />
        <div className="searchbar_icon" style={{transform:"scale(1.4)"}}>
            <i className='simple-icon-magnifier'/>
        </div>
    </div>
  )
}

export default SearchBar