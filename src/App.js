import React, { useState, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomeHeader from './views/components/HomeHeader';
import Sidenav from './views/components/Sidenav';
import './views/css/universal.scss'

const Itempage = React.lazy(() =>
  import( './views/Itempage')
);
const Latest = React.lazy(() =>
  import( './views/Latest')
);
const Popular = React.lazy(() =>
  import( './views/Popular')
);
const Tweaked = React.lazy(() =>
  import( './views/Tweaked')
);

const App = () => {
  const [menuModalOpen,setMenuModalOpen] = useState(false)
  return (
    <div className="h-100">
        <>
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Sidenav menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
              <HomeHeader  menuModalOpen={menuModalOpen} setMenuModalOpen={setMenuModalOpen}/>
              <Switch>
                <Route
                  path="/latest"
                  render={() => <Latest/>}
                />
                <Route
                  path="/popular"
                  render={() => <Popular/>}
                />
                <Route
                  path="/tweaked"
                  render={() => <Tweaked/>}
                />
                <Route
                  path="/item/:id"
                  render={() => <Itempage/>}
                />
                <Redirect exact from="/" to="/latest" />
              </Switch>
            </Router>
          </Suspense>
        </>
    </div>
    );
  }
  const mapDispatchToProps = (dispatch) => {
    return{
    //   setWallet: (object)=>{
    //      dispatch(Login(object))
    //  }
    }
  };

const mapStateToProps = (state) => {
  return { 
    // wallet:state.auth.wallet,
  };
};

const mapActionsToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
