import React, { useEffect, useState } from 'react'
import { chargeTweakedApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'
import HomeHeader from './components/HomeHeader';
import Sidenav from './components/Sidenav';

function Tweaked({
  reduxChargeTweakedApplist,
  reduxAppList}) {
  const [appListPending,setAppListPending] = useState(false)
  useEffect(()=>{
    if(reduxAppList.tweaked_applist.length===0){
      setAppListPending(true)
      fetch("/v7/tweak_list.php?p=1",{
        method:"GET"
      })
      .then(res=>{
        if(!res.ok){
          setAppListPending(true)
          return Promise.reject()
        }
        return res.json()
      })
      .then((res)=>{
        if(res && res.info){
          setAppListPending(false)
          reduxChargeTweakedApplist(res.info)
        }
      })
    }
  },[])

  const [ menuModalOpen,setMenuModalOpen ] = useState(false)
  const [ itemMapList, setItemMapList ] = useState(null)
  const handleSearch = (list) => {
    setItemMapList(list)
  } 

  return (
    <div>
        <Sidenav menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
        <HomeHeader  menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
        <SearchBar handleSearch={handleSearch}/>
        <ItemsMap items={reduxAppList.tweaked_applist} itemsPending={appListPending} itemMapList={itemMapList} tweaked/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    reduxChargeTweakedApplist: (object)=>{
      dispatch(chargeTweakedApplist(object))
    }
  }
};

const mapStateToProps = (state) => {
  return {
    reduxAppList : state.homepageApplist
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tweaked))