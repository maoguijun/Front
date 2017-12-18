import Immutable from 'immutable'
import {easyFetchWithCache,easyfetch} from '../../../utils/FetchHelper'
import {host} from '../../../config'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const FETCH_USER_INFO = 'FETCH_USER_INFO'
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------


export const login = (params) => {
  return (dispatch, getState) => {
    return easyFetchWithCache(host,'/login','post',params,null,true,'json')
      .then(e => {
        //将用户信息存到本地
        window.sessionStorage.ifLogin = JSON.stringify(e)
        return(dispatch({
          type:USER_LOGGED_IN,
          payload:e
        }))
      }
      )
      .catch(error =>({error:error}))
  }
}


export const fetchUserInfo = () => {
  return (dispatch, getState) => {
    return easyfetch(host,'/common/userinfo','get')
      .then(e => {
          return(dispatch({
            type:FETCH_USER_INFO,
            payload:e.obj
          }))
        }
      )
      .catch(error =>({error:error}))
  }
}

const ACTION_HANDLERS = {
  [USER_LOGGED_IN]    : (state, action) => state.update('userInfo',() =>Immutable.fromJS(action.payload.obj)).update('userLogout',()=>false),
  [FETCH_USER_INFO]    : (state, action) => state.update('userLoginInfo',() =>Immutable.fromJS(action.payload)),

};


// ------------------------------------
// Reducer
// ------------------------------------
export default function userInfoReducer (state = Immutable.Map(), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
