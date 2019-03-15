import * as types from 'constants/actionTypes'

export const getSynonyms = payload => ({
  type: types.GET_SYNONYMS,
  payload
})

export const setTypeOfEditing = payload => ({
  type: types.SET_TYPE_OF_EDITING,
  payload
})
