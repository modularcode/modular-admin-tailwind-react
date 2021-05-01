import React from 'react'
import { IntlProvider } from 'react-intl'

import AppRouter from './AppRouter'

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}
export default () => (
  <IntlProvider locale={navigator.language}>
    <App />
  </IntlProvider>
)
