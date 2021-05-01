import React from 'react'
import { render } from '_tests'
import App from './App'

describe('<App />', () => {
  test('renders without crashing', () => {
    render(<App />)
  })
})
