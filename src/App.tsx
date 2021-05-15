import React, { useLayoutEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { HashRouter, BrowserRouter, Route, Switch, useLocation } from 'react-router-dom' //
import { ApolloProvider } from '@apollo/client/react'

import config from './_config'
import clientGraphQL from '_api/clientGraphQL'

import { Auth } from './Auth'
import { Administration } from './Administration'
import { Dashboard } from './Dashboard'
import DashboardLayout from '_layouts/DashboardLayout'

const App: React.FC = () => {
  const location = useLocation()
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
  <ApolloProvider client={clientGraphQL}>
    <IntlProvider locale={navigator.language}>
      <AppRouterComponent>
        <App />
      </AppRouterComponent>
    </IntlProvider>
  </ApolloProvider>
)

export default AppWithPrividers
