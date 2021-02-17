import { action } from 'typesafe-actions/dist/action'

export default interface Action<P> {
  type: string
  payload: P
}
