import { CHARGE_LATEST_APPLIST, CHARGE_TWEAKED_APPLIST, CHARGE_POPULAR_APPLIST } from '../constants';


const INIT_STATE = {
  latest_applist:[],
  tweaked_applist:[],
  popular_applist:[]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHARGE_LATEST_APPLIST:
      return { 
          ...state,
          latest_applist: action.payload
      };
    case CHARGE_TWEAKED_APPLIST:
      return { 
          ...state,
          tweaked_applist: action.payload
      };
    case CHARGE_POPULAR_APPLIST:
      return { 
          ...state,
          popular_applist: action.payload
      };
    default:
      return { 
          ...state 
      };
  }
};