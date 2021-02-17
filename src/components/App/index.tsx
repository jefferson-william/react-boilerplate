import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routers from '~/routers'
import { store, persistor } from '~/store'
import GlobalStyles from '~/styles/global'
import history from '~/utils/history'

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <Routers history={history} />
    </PersistGate>
  </Provider>
)

export default hot(App)
