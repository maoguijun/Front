import Immutable from "immutable";
import { easyfetch } from "utils";
import { easyFetchWithCache } from "utils/FetchHelper";
import { host } from "config";
// ------------------------------------
// Constants
// ------------------------------------
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const GET_USER_INFO = "GET_USER_INFO";
export const UPDATE_USER_LOGNUM = "UPDATE_USER_LOGNUM";

// ------------------------------------
// Actions
// ------------------------------------
export function logout() {
  return (dispatch, getState) => {
    return easyFetchWithCache(host, "/logout", "put", null, "", true)
      .then(e => {
        // sessionStorage.removeItem('ifLogin')
        dispatch({
          type: USER_LOGGED_OUT
        });
        return e;
      })
      .catch(error => ({ error: error }));
  };
}

export const login = params => {
  return (dispatch, getState) => {
    return easyFetchWithCache(host, "/login", "put", params)
      .then(e => {
        dispatch({
          type: USER_LOGGED_IN,
          payload: Immutable.fromJS(e)
        });
        return e;
      })
      .catch(error => ({ error: error }));
  };
};
export const getLogNum = () => {
  return (dispatch, getState) => {
    return easyFetchWithCache(host, "/applylogs", "get", null, "", true)
      .then(e => {
        dispatch({
          type: UPDATE_USER_LOGNUM,
          payload: Immutable.fromJS(e.applylogs)
        });
        return e;
      })
      .catch(error => ({ error: error }));
  };
};

export const actions = {
  login
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGGED_OUT]: (state, action) => state.update("userLogout", () => true),
  [USER_LOGGED_IN]: (state, action) => {
    return Immutable.fromJS(action.payload);
  },
  [GET_USER_INFO]: (state, action) => {
    return Immutable.fromJS(action.payload);
  },
  [UPDATE_USER_LOGNUM]: (state, action) => {
    return state.set("logNum", action.payload);
  }
};

// ------------------------------------
// Reducer
// ------------------------------------

// //console.log('localUser',localUser)
const initialState = Immutable.Map();
export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
