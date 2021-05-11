import React from 'react'
import { IntlProvider } from 'react-intl'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom' //

import config from './_config'

import { Auth } from './Auth'
import { Administration } from './Administration'
import { Dashboard } from './Dashboard'
import DashboardLayout from '_layouts/DashboardLayout'

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={Auth} />
        <DashboardLayout>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/administration" component={Administration} />
          </Switch>
        </DashboardLayout>
      </Switch>
    </div>
  )
}

// Use different router type depending on configuration
const AppRouterComponent: React.FC = ({ children }) => {
  return config.navigationType === 'history' ? (
    <BrowserRouter>{children}</BrowserRouter>
  ) : (
    <HashRouter>{children}</HashRouter>
  )
}

const AppWithPrividers: React.FC = () => (
  <IntlProvider locale={navigator.language}>
    <AppRouterComponent>
      <App />
    </AppRouterComponent>
  </IntlProvider>
)

export default AppWithPrividers
