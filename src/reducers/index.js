import { combineReducers } from 'redux'
import editingReducer from './editingReducer'

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  editingReducer
})

export default rootReducer
