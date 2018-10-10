import { FETCH_SHIFT, NEW_SHIFT } from '../actions/types'

const initState = {
  this_shift: {},
  archived_shift: {}
}

export default function(state = initState, action){
  switch(action.type) {
    default:
      return state;
  }
}
