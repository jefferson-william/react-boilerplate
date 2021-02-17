import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { push } from 'connected-react-router'
import { expectSaga } from 'redux-saga-test-plan'
import { snackcase, camelcase } from '~/__mocks__/store/Repo/sagas'
import { reposRequest, setRepos } from '~/store/Repo/actions'
import { reposRequest as reposRequestSaga } from '~/store/Repo/sagas'
import INITIAL_STATE from '~/store/Repo/state'

describe('store/Repo/sagas', () => {
  const route = 'https://api.github.com/users/boilerplate/repos'
  const mock = new MockAdapter(axios)

  describe("When user tries to do Saga's reposRequest('boilerplate') correctly", () => {
    it('It is directed to home', () => {
      const action = reposRequest('boilerplate')

      mock.onGet(route).reply(200, snackcase)

      return expectSaga(reposRequestSaga, action)
        .put(setRepos(INITIAL_STATE.repos))
        .call(axios.get, route)
        .put(setRepos(camelcase))
        .put(push('/'))
        .run()
    })
  })

  describe("When the request in Saga's reposRequest('boilerplate') is not possible", () => {
    it('Reset data', () => {
      const action = reposRequest('boilerplate')

      mock.onGet(route).reply(404)

      return expectSaga(reposRequestSaga, action)
        .put(setRepos(INITIAL_STATE.repos))
        .call(axios.get, route)
        .put(setRepos(INITIAL_STATE.repos))
        .put(push('/'))
        .run()
    })
  })
})
