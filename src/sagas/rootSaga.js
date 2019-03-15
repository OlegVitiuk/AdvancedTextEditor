import { all } from 'redux-saga/effects'
import watcherGetSynonyms from './watcher'

export default function* rootSaga() {
  yield all([ watcherGetSynonyms() ])
}
