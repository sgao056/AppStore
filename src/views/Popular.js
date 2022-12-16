import React, { useEffect, useState } from 'react'
import { chargePopularApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'
import HomeHeader from './components/HomeHeader';
import Sidenav from './components/Sidenav';

function Popular({
  reduxChargePopularApplist,
  reduxAppList}) {
  const [appListPending,setAppListPending] = useState(false)
  useEffect(()=>{
    if(reduxAppList.popular_applist.length===0){
      setAppListPending(true)
      fetch("/v7/applist.php?p=1&type=top",{
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
          reduxChargePopularApplist(res.info)
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
        <ItemsMap items={reduxAppList.popular_applist} itemsPending={appListPending} itemMapList={itemMapList} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    reduxChargePopularApplist: (object)=>{
      dispatch(chargePopularApplist(object))
    }
  }
};

const mapStateToProps = (state) => {
  return {
    reduxAppList : state.homepageApplist
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Popular))