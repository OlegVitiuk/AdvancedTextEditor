import initialState from 'reducers/initialState'
import * as types from 'constants/actionTypes'

// Handles controls related actions
// The idea is to return an updated copy of the state depending on the action type.
export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_SYNONYMS_ASYNC:
      return { ...state, synonyms: action.synonyms }
    default:
      return state
  }
}
