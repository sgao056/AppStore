import React, { useEffect, useState, useRef } from 'react'
import { chargePopularApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'
import HomeHeader from './components/HomeHeader';
import Sidenav from './components/Sidenav';
import Pending from './components/Pending';

function Popular({
  reduxChargePopularApplist,
  reduxAppList}) {

  const [ appListPending,setAppListPending ] = useState(false)
  const [ page,setPage ] = useState(1)
  const [ menuModalOpen,setMenuModalOpen ] = useState(false)
  const [ pending,setPending ] = useState(false)
  const [ itemMapList, setItemMapList ] = useState(null)

  const popularBodyHeight = useRef();

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
          setPage(page+1)
        }
      })
    }
  },[])

  useEffect(() => {
    const handleScroll = event => {
      if(reduxAppList.popular_applist.length>0 && popularBodyHeight.current && (window.scrollY + window.innerHeight)===(popularBodyHeight.current.clientHeight+60)){
        setPending(true)
        fetch(`/v7/applist.php?p=${page}&type=new`,{
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
            reduxChargePopularApplist(reduxAppList.popular_applist.concat(res.info))
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
    <div className='popularBodyHeight' ref={popularBodyHeight}>
        <div style={{display:pending?"block":"none"}}>
          <Pending marginTop={0} fixed/>
        </div>
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