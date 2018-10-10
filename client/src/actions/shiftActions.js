import { FETCH_SHIFT, NEW_SHIFT } from './types'

export function fetchShift(){
  return function(dispatch) {
    fetch("/shifts/1")
    .then( r => r.json()
    .then( json => dispatch({
      type: FETCH_SHIFT,
      payload: json
    }))
  }
}
