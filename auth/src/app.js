import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { Router, Route, Switch } from 'react-router-dom'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

const App = (props) => {
  const { history } = props

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/' component={() => <h1>Auth App</h1>}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App