import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { Router, Route, Switch } from 'react-router-dom'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = (props) => {
  const { history } = props

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing}/>
            <Route path='/' component={Landing}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App