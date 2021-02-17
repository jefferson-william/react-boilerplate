import axios from 'axios'
import { push } from 'connected-react-router'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { setRepos } from '~/store/Repo/actions'
import INITIAL_STATE from '~/store/Repo/state'
import TYPES from '~/store/Repo/types'
import Action from '~/types/lib/typesafe-actions'

export function* reposRequest(data: Action<string>) {
  try {
    yield put(setRepos(INITIAL_STATE.repos))

    const response = yield call(axios.get, `https://api.github.com/users/${data.payload}/repos`)

    const repos = response.data?.map((repo: any) => ({ id: repo.id, fullName: repo.full_name }))

    yield put(setRepos(repos))
  } catch (exception) {
    yield put(setRepos(INITIAL_STATE.repos))
  } finally {
    yield put(push('/'))
  }
}

export default all([takeLatest(TYPES.REPOS_REQUEST, reposRequest)])
