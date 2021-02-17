export interface Repo {
  id: string
  fullName: string
}

export default interface State {
  repos: Repo[]
}
