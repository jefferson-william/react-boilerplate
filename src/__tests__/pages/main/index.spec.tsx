import React from 'react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import moxios from 'moxios'
import { camelcase } from '~/__mocks__/store/Repo/sagas'
import Routers from '~/routers'
import { store } from '~/store'

describe('pages/main', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('render page', (done: any) => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
    })

    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Routers history={history} />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      const logo = getByTestId('logo')

      expect(logo).toBeInTheDocument()
      expect(history.location.pathname).toBe('/')
    })

    moxios.wait(async () => {
      const request = moxios.requests.mostRecent()

      await request.respondWith({
        status: 200,
        response: camelcase,
      })

      const li = getAllByTestId('li')

      expect(li).toHaveLength(2)

      done()
    })
  })
})
