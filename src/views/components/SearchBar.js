import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import "../css/components/searchbar.scss"
import Pending from './Pending';
// import {AdHTML} from `${process.env.PUBLIC_URL}/adHTML`;

function SearchBar(props) {
  const { tweaked, handleSearch } = props
  const [searchValue, setSearchValue] = useState('')
  const [ pending, setPending ] = useState(false)
  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      if(searchValue.replace(/(^\s*)|(\s*$)/g, "")===''){
        handleSearch(null)
      }
      else{
        setPending(true)
        if(tweaked){
          fetch(`/v7/tweak_search.php?q=${searchValue}`,{
            method:"GET"
          })
          .then(res=>{
            if(!res.ok){
              alert(`System Error ${res.status}, please contact with Dev Team!`)
              setPending(false)
              return Promise.reject()
            }
            return res.json()
          })
          .then(res=>{
            setPending(false)
            handleSearch(res.list)
          })
        }
        else{
          fetch(`/v7/appsearch.php?q=${searchValue}`,{
            method:"GET"
          })
          .then(res=>{
            if(!res.ok){
              alert(`System Error ${res.status}, please contact with Dev Team!`)
              setPending(false)
              return Promise.reject()
            }
            return res.json()
          })
          .then(res=>{
            setPending(false)
            handleSearch(res.list)
          })
        }
      }
    }
  }
  return (
    <>
      <div style={{display:pending?"block":"none"}}>
        <Pending marginTop={0} fixed/>
      </div>
      <div className='searchbar'>
        <Input 
        type='search'
        value={searchValue}
        className='searchbar_input h-100'
        placeholder='Search'
        onChange={(e)=>{    
          setSearchValue(e.target.value)
        }}
        onKeyUp={handleKeyPress}
        />
        <div className="searchbar_icon" style={{transform:"scale(1.4)"}}>
            <i className='simple-icon-magnifier'/>
        </div>
        <img src={`${process.env.PUBLIC_URL}/adHTML.png`} alt="" />
      </div>
    </>
  )
}

export default SearchBar