import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import 'assets/scss/material-kit-react.scss?v=1.9.0'

import { Home } from './views/home/Home'
import Footer from 'components/Footer/Footer.js'
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

const hist = createBrowserHistory()

ReactDOM.render(
  <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
    <div>
      <Router history={hist}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
)
