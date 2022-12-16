import React, { useEffect, useState, useRef } from 'react'
import { chargeLatestApplist, chargePopularApplist, chargeTweakedApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'
import HomeHeader from './components/HomeHeader';
import Sidenav from './components/Sidenav';


function Latest({
  reduxChargeLatestApplist,
  reduxChargePopularApplist,
  reduxChargeTweakedApplist,
  reduxAppList}) {
  const [appListPending,setAppListPending] = useState(false)
  useEffect(()=>{
    if(reduxAppList.latest_applist.length===0){
      setAppListPending(true)
      fetch("/v7/applist.php?p=1&type=new",{
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

  const [ menuModalOpen,setMenuModalOpen ] = useState(false)
  const [ itemMapList, setItemMapList ] = useState(null)

  const bodyHeight = useRef();

  const handleSearch = (list) => {
    setItemMapList(list)
  } 

  useEffect(() => {
    const handleScroll = event => {
      if((window.scrollY + window.innerHeight)===(bodyHeight.current.clientHeight+60)){
        console.log("getnewdata")
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bodyHeight' ref={bodyHeight}>
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
