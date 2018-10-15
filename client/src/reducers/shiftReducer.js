import { FETCH_SHIFT, NEW_SHIFT } from '../actions/types'

const initState = {
  thisShift: {},
  archivedShift: {}
}

export default function(state = initState, action){
  switch(action.type) {
    case FETCH_SHIFT:
      return {
        ...state,
        thisShift: action.payload
      }
    default:
      return state;
  }
}
