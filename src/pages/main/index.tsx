import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'
import { Main } from '~/pages/main/styles'
import * as RepoActions from '~/store/Repo/actions'
import States from '~/types/store/allStates'
import { Repo } from '~/types/store/Repo/state'

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const repos = useSelector<States, Repo[]>((state) => state.Repo.repos)

  useEffect(() => {
    dispatch(RepoActions.reposRequest('jefferson-william'))
  }, [dispatch])

  return (
    <Main className="main">
      <header className="main-header">
        <Logo data-testid="logo" />
      </header>
      <main>
        <ul>
          {repos.map(({ id, fullName }) => (
            <li key={id} data-testid="li">
              {fullName}
            </li>
          ))}
        </ul>
      </main>
    </Main>
  )
}

export default Component
