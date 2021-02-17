import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'boilerplate',
      whitelist: [],
      storage,
    },
    reducers
  )

  return persistedReducer
}
