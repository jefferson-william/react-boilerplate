import { produce } from 'immer'
import { Reducer } from 'redux'
import { INITIAL_STATE } from '~/store/Repo/state'
import TYPES from '~/store/Repo/types'
import Action from '~/types/lib/typesafe-actions'
import State from '~/types/store/Repo/state'

const reducer: Reducer<State, Action<State>> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_REPOS:
      return produce(state, (draft: State) => {
        draft.repos = action.payload.repos
      })

    default:
      return state
  }
}

export default reducer
