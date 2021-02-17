import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Main from '~/pages/main'
import Props from '~/types/routers'

const Routers: React.FC<Props> = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  </ConnectedRouter>
)

export default Routers
