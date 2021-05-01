import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import authService from './_services/authService'
import api from './_api/'

import App from './App'

// Mount the app only when auth services and api services are ready
// this solves api mocks issue
;(async () => {
  // Init the auth service
  authService.init()

  // Init rest API client
  await api.init()

  ReactDOM.render(<App />, document.getElementById('root'))
})()
