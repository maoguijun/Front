import { getLocale } from 'utils'
export const LOCALE_CHANGE = 'LOCALE_CHANGE'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOCALE_CHANGE]    : (state, action) => {
    sessionStorage.setItem('locale', action.payload)
    return action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = sessionStorage.getItem('locale') || getLocale()
export default function localeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
