/**
 * Created by Yurek on 2017/5/15.
 */
import Immutable from 'immutable'
import {easyfetch} from '../../../../utils/FetchHelper'
import {host} from '../../../../config'

export const FETCH_BILL_TO = 'FETCH_BILL_TO';
export const NEW_BILL_TO = 'NEW_BILL_TO';
export const ALT_BILL_TO = 'ALT_BILL_TO'
export const FETCH_BILL_TO_INFO = 'FETCH_BILL_TO_INFO'

export const fetchBillTo = (json) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/billTos','get',json)
      .then(
        e=>{
          return dispatch({
            type    : FETCH_BILL_TO,
            payload : e
          })
        }
      )
      .catch(e=>({error:e}))

  }
}

export const fetchBillToInfo = (id) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/billTos/'+id,'get')
      .then(
        e=>{
          return dispatch({
            type    : FETCH_BILL_TO_INFO,
            payload : e.obj
          })
        }
      )
      .catch(e=>({error:e}))

  }
}

export const newBillTo = (json) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/billTos','post',json)
      .then(
        e=>{
          return dispatch(fetchBillTo())
        }
      )
      .catch(e=>({error:e}))

  }
}

export const altBillTo = (action,id,json) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/billTos/'+action+'/'+id,'put',json)
      .then(
        e=>{
          return dispatch(fetchBillTo())
        }
      )
      .catch(e=>({error:e}))

  }
}


const ACTION_HANDLERS = {
  [FETCH_BILL_TO]    : (state, action) => state.update('billTo',() =>Immutable.fromJS(action.payload.objs)).update('count',() =>Immutable.fromJS(action.payload.count)),
  [FETCH_BILL_TO_INFO] :(state, action) => state.update('billToInfo',() =>Immutable.fromJS(action.payload))
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function billToReducer (state = Immutable.Map(), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
