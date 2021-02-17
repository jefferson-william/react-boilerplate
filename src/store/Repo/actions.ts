import { action } from 'typesafe-actions'
import TYPES from '~/store/Repo/types'
import { Repo } from '~/types/store/Repo/state'

export const setRepos = (repos: Repo[]) => action(TYPES.SET_REPOS, { repos })

export const reposRequest = (repoName: string) => action<string, string>(TYPES.REPOS_REQUEST, repoName)
