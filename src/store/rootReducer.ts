import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import Repo from '~/store/Repo/reducer'

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    Repo,
  })

export default createRootReducer
