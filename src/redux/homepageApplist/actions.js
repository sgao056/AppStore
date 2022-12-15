import { CHARGE_LATEST_APPLIST, CHARGE_TWEAKED_APPLIST, CHARGE_POPULAR_APPLIST } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const chargeLatestApplist = (latestApplist) => {
  return {
    type: CHARGE_LATEST_APPLIST,
    payload: latestApplist
  };
};

export const chargeTweakedApplist = (tweakedApplist) => {
  return {
    type: CHARGE_TWEAKED_APPLIST,
    payload: tweakedApplist
  };
};

export const chargePopularApplist = (popularApplist) => {
  return {
    type: CHARGE_POPULAR_APPLIST,
    payload: popularApplist
  };
};