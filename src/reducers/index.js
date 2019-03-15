import { combineReducers } from 'redux'
import synonymsReducer from './synonymsReducer'

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  synonymsReducer
})

export default rootReducer
