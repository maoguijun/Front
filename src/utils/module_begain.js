/**
 * Created by Yurek on 2017/5/15.
 */
import Immutable from 'immutable'
import {easyfetch} from '../utils/FetchHelper'
import {host} from '../../../../config'

export const FETCH_PLACED_TO = 'FETCH_PLACED_TO';

export const fetchPlacedTo = (json) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/placedTos','get',json)
      .then(
        e=>{
          return dispatch({
            type    : FETCH_PLACED_TO,
            payload : e
          })
        }
      )
      .catch(e=>({error:e}))

  }
}

export const fetchPlacedToInfo = (id) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/placedTos/'+id,'get')
      .then(
        e=>{
          return dispatch({
            type    : FETCH_PLACED_TO_INFO,
            payload : e.obj
          })
        }
      )
      .catch(e=>({error:e}))

  }
}

export const newPlacedTo = (json) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/placedTos','post',json)
      .then(
        e=>{
          return dispatch(fetchPlacedTo())
        }
      )
      .catch(e=>({error:e}))

  }
}

export const altPlacedTo = (action,id,json) => {
  return (dispatch, getState) => {
    return easyfetch(host,'/placedTos/'+action+'/'+id,'put',json)
      .then(
        e=>{
          return dispatch(fetchPlacedTo())
        }
      )
      .catch(e=>({error:e}))

  }
}


const ACTION_HANDLERS = {
  [FETCH_PLACED_TO]    : (state, action) => state.update('placedTo',() =>Immutable.fromJS(action.payload.objs)).update('count',() =>Immutable.fromJS(action.payload.count)),
};

// ------------------------------------
// Reducer
// ------------------------------------

export default function placedToReducer (state = Immutable.Map(), action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
