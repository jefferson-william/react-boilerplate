/* eslint-disable camelcase */
import { Repo } from '~/types/store/Repo/state'

export const snackcase: any = [
  { id: '1', full_name: 'A' },
  { id: '2', full_name: 'B' },
]

export const camelcase: Repo[] = [
  { id: '1', fullName: 'A' },
  { id: '2', fullName: 'B' },
]
