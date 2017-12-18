import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";
import localReducer from "./locale";
import userReducer from "./user";
import userInfoReducer from "../routes/Login/modules/login";
import billTo from "../routes/system_settings/bill_to/modules/bill_to";

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    routing: routerReducer,
    locale: localReducer,
    user: userReducer,
    userInfo: userInfoReducer,
    billTo,
    ...asyncReducers
  });
};
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
