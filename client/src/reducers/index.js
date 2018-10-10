import { combineReducers } from 'redux'
import shiftReducer from './shiftReducer'

export default combineReducers({
  shifts: shiftReducer
})
