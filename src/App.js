import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ScrollToTop from 'views/components/ScrollToTop';
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

  useEffect(()=>{
    localStorage.clear();
  },[])

  return (
    <div className="h-100">
        <>
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <ScrollToTop>
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
              </ScrollToTop>
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
