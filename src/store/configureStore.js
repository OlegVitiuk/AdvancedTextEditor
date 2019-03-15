import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from 'reducers'
import rootSaga from 'sagas/rootSaga'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger))),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore
