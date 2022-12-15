import { combineReducers } from 'redux';
import loginPending from './loginPending/reducer';
import homepageApplist from './homepageApplist/reducer';
import menu from './menu/reducer';

const reducers = combineReducers({
  loginPending,
  homepageApplist,
  menu,
});

export default reducers;
