import { graphql } from 'msw'

const organizationsMocks = [
  graphql.query('GetOrganizations', (req, res, ctx) => {
    console.log('req', req)

    return res(
      ctx.data({
        organizations: [
          {
            test: 'test',
            test2: 'test2',
          },
        ],
      }),
    )
  }),
]

export default organizationsMocks
