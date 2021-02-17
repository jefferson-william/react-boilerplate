import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import persistReducers from '~/store/persistReducers'
import rootReducer from '~/store/rootReducer'
import rootSaga from '~/store/rootSaga'
import States from '~/types/store/allStates'
import history from '~/utils/history'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const composeEnhancers = composeWithDevTools({})

const enhancer: any =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)

const store: Store<States> = createStore(persistReducers(rootReducer(history)), undefined, enhancer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
