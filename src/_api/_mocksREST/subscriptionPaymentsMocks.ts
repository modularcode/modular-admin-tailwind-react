import _ from 'lodash'
import { rest } from 'msw'

import config from '_config'

const apiUrl = config.api.url
const subscriptionPaymentsData = { list: [] }

const userMocks = [
  rest.get(`${apiUrl}/subscriptionPayments`, async (req, res, ctx) => {
    let limit = parseInt(req.params.get('limit') || '0')
    let offset = parseInt(req.params.get('offset') || '10')
    let order = JSON.parse(req.params.get('order') || '{}')

    const subscriptionPayments = order
      ? _.orderBy(subscriptionPaymentsData.list, [order.orderBy], [order.order])
      : subscriptionPaymentsData.list

    const result = {
      subscriptionPayments: subscriptionPayments.slice(offset, offset + limit),
      count: subscriptionPayments.length,
    }

    return res(
      // Set custom status
      ctx.status(200),
      // Delay the response
      ctx.delay(500),
      // send JSON response body
      ctx.json(result),
    )
  }),
]

export default userMocks
