import { put, call } from 'redux-saga/effects'
import * as API from 'api/api'
import * as types from 'constants/actionTypes'

export function* synonymsSaga({ payload }) {
  try {
    const synonyms = yield call(API.fetchSynonyms, payload)
    yield put({ type: types.GET_SYNONYMS_ASYNC, synonyms })
  } catch (error) {
    yield put({ type: 'FETCH_SYNONYMS_ERROR', error })
  }
}
