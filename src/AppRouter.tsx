import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom' //

import config from './_config'

import { Auth } from './Auth'
import { Dashboard } from './Dashboard'
import DashboardLayout from '_layouts/DashboardLayout'

// Use different router type depending on configuration
const AppRouterComponent: React.FC = ({ children }) => {
  return config.navigationType === 'history' ? (
    <BrowserRouter>{children}</BrowserRouter>
  ) : (
    <HashRouter>{children}</HashRouter>
  )
}

const AppRouter: React.FC = () => {
  return (
    <AppRouterComponent>
      <Switch>
        <Route path="/auth" component={Auth} />
        <DashboardLayout>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </DashboardLayout>
      </Switch>
    </AppRouterComponent>
  )
}

export default AppRouter
