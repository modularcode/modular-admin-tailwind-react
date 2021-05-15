import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import usersMocks from './usersMocks'
import subscriptionPlansMocks from './subscriptionPlansMocks'

const start =
  process.env.NODE_ENV !== 'test'
    ? setupWorker(...usersMocks, ...subscriptionPlansMocks).start
    : setupServer(...usersMocks, ...subscriptionPlansMocks)

export default {
  init: start,
}
