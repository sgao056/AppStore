import React, { useEffect, useState, useRef } from 'react'
import { chargeLatestApplist, chargePopularApplist, chargeTweakedApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'
import HomeHeader from './components/HomeHeader';
import Sidenav from './components/Sidenav';
import Pending from './components/Pending';

function Latest({
  reduxChargeLatestApplist,
  reduxChargePopularApplist,
  reduxChargeTweakedApplist,
  reduxAppList}) {

  const [appListPending,setAppListPending] = useState(false)
  const [page,setPage] = useState(1)
  const [ menuModalOpen,setMenuModalOpen ] = useState(false)
  const [ pending,setPending ] = useState(false)
  const [ itemMapList, setItemMapList ] = useState(null)

  const latestBodyHeight = useRef();

  useEffect(async ()=>{
    if(reduxAppList.latest_applist.length===0){
      setAppListPending(true)
      await fetch(`/v7/applist.php?p=${page}&type=new`,{
        method:"GET"
      })
      .then(res=>{
        if(!res.ok){
          setAppListPending(false)
          alert(`System Error ${res.status}, please contact with Dev Team!`)
          return Promise.reject()
        }
        return res.json()
      })
      .then((res)=>{
        if(res && res.info){
          reduxChargeLatestApplist(res.info)
          setAppListPending(false)
          setPage(page+1)
        }
      })
    }
    if(reduxAppList.popular_applist.length===0){
      fetch("/v7/applist.php?p=1&type=top",{
        method:"GET"
      })
      .then(res=>{
        if(!res.ok){
          return Promise.reject()
        }
        return res.json()
      })
      .then((res)=>{
        if(res && res.info){
          reduxChargePopularApplist(res.info)
        }
      })
    }
    if(reduxAppList.tweaked_applist.length===0){
      fetch("/v7/tweak_list.php?p=1",{
        method:"GET"
      })
      .then(res=>{
        if(!res.ok){
          return Promise.reject()
        }
        return res.json()
      })
      .then((res)=>{
        if(res && res.info){
          reduxChargeTweakedApplist(res.info)
        }
      })
    }
  },[])

  useEffect(() => {
    const handleScroll = event => {
      if(reduxAppList.latest_applist.length>0 && latestBodyHeight.current && (window.scrollY + window.innerHeight)===(latestBodyHeight.current.clientHeight+60)){
        setPending(true)
        fetch(`/v7/applist.php?p=${page}&type=top`,{
          method:"GET"
        })
        .then(res=>{
          if(!res.ok){
            setPending(false)
            return Promise.reject()
          }
          return res.json()
        })
        .then((res)=>{
          if(res && res.info && res.info.length>0){
            reduxChargeLatestApplist(reduxAppList.latest_applist.concat(res.info))
            setPage(page+1)
            setPending(false)
          }
          else{
            alert('No more data!')
            setPending(false)
          }
        })
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleSearch = (list) => {
    setItemMapList(list)
  } 

  return (
    <div className='latestBodyHeight' ref={latestBodyHeight}>
        <div style={{display:pending?"block":"none"}}>
          <Pending marginTop={0} fixed/>
        </div>
        <Sidenav menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
        <HomeHeader  menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
        <SearchBar handleSearch={handleSearch}/>
        <ItemsMap items={reduxAppList.latest_applist} itemsPending={appListPending} itemMapList={itemMapList} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    reduxChargeLatestApplist: (object)=>{
      dispatch(chargeLatestApplist(object))
    },
    reduxChargePopularApplist: (object)=>{
      dispatch(chargePopularApplist(object))
    },
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Latest))
