import React, { useEffect, useState, useRef } from 'react'
import { chargeTweakedApplist } from 'redux/actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar'
import ItemsMap from './components/ItemsMap'
import HomeHeader from './components/HomeHeader';
import Sidenav from './components/Sidenav';
import Pending from './components/Pending';

function Tweaked({
  reduxChargeTweakedApplist,
  reduxAppList}) {

  const [ appListPending,setAppListPending ] = useState(false)
  const [ page,setPage ] = useState(1)
  const [ menuModalOpen,setMenuModalOpen ] = useState(false)
  const [ pending,setPending ] = useState(false)
  const [ itemMapList, setItemMapList ] = useState(null)

  const tweakedBodyHeight = useRef();

  useEffect(()=>{
    if(reduxAppList.tweaked_applist.length===0){
      setAppListPending(true)
      fetch(`${process.env.REACT_APP_API}/v7/tweak_list.php?p=${page}`,{
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
          setPage(page+1)
        }
      })
    }
  },[])

  
  useEffect(() => {
    const handleScroll = event => {
      if(reduxAppList.tweaked_applist.length>0 && tweakedBodyHeight.current && (window.scrollY + window.innerHeight)===(tweakedBodyHeight.current.clientHeight+60)){
        setPending(true)
        fetch(`${process.env.REACT_APP_API}/v7/tweak_list.php?p=${page}&`,{
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
            reduxChargeTweakedApplist(reduxAppList.tweaked_applist.concat(res.info))
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
    <div className='tweakedBodyHeight' ref={tweakedBodyHeight}>
        <div style={{display:pending?"block":"none"}}>
          <Pending marginTop={0} fixed/>
        </div>
        <Sidenav menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
        <HomeHeader  menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
        <SearchBar handleSearch={handleSearch} tweaked/>
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