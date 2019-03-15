import { takeEvery } from 'redux-saga/effects'
import * as types from 'constants/actionTypes'
import { synonymsSaga } from './synonymsSaga'

// Watches for GET_SYNONYMS action type asynchronously
export default function* watcherGetSynonyms() {
  yield takeEvery(types.GET_SYNONYMS, synonymsSaga)
}
