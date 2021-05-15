import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import authMocks from './authMocks'
import organizationsMocks from './organizationsMocks'
// import { ApolloServer, gql } from 'apollo-server'

const start = () => {
  if (process.env.NODE_ENV !== 'test') {
    setupWorker(...authMocks, ...organizationsMocks).start()
  } else {
    setupServer(...authMocks, ...organizationsMocks)
  }
}

export default {
  init: start,
}
