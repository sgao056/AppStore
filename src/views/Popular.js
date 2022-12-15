import React, { useEffect, useState } from 'react'
import { chargePopularApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'


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
          console.log(res.info)
          setAppListPending(false)
          reduxChargePopularApplist(res.info)
        }
      })
    }
  },[])

  return (
    <div>
        <SearchBar />
        <ItemsMap items={reduxAppList.popular_applist} itemsPending={appListPending}/>
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