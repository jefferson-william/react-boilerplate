import { all } from 'redux-saga/effects'
import Repo from '~/store/Repo/sagas'

export default function* rootSaga() {
  return yield all([Repo])
}
