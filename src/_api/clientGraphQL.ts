import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'

import config from '_config'

const typeDefs = gql`
  type Valod {
    isHere: Boolean!
  }
  extend type Query {
    greeting: String!
    valod: Valod!
    numberSix: Int!
    numberSeven: Int!
  }
`

const client = new ApolloClient({
  // uri: `${config.api.url}/graphql`,
  link: new HttpLink({
    uri: `${config.api.url}/graphql`,

    // Use explicit `window.fetch` so tha outgoing requests
    // are captured and deferred until the Service Worker is ready.
    fetch: (...args) => fetch(...args),
  }),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers: {
    Query: {
      greeting() {
        return 'hello from  TutorialsPoint !!!'
      },
      valod() {
        return {
          isHere: true,
        }
      },
      numberSix() {
        return 6
      },
      numberSeven() {
        return 7
      },
    },
  },
})

export default client
