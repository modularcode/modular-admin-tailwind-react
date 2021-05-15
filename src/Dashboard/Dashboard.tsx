import React from 'react'
import faker from 'faker'
import { useQuery, gql } from '@apollo/client'
import { BaseCard, BaseCardBody } from '_common/BaseCard'

type DashboardProps = {}

const content = faker.lorem.paragraphs(3)
const content2 = faker.lorem.paragraphs(3)
const content3 = faker.lorem.paragraphs(3)

/*
import { useQuery, gql } from '@apollo/client'

const USER_NFO = gql`
  query GetUserInfo {
    user
  }
`

const { loading, error, data } = useQuery(USER_NFO)

if (loading) return <p>Loading...</p>
if (error) return <p>Error :( {JSON.stringify(error)}</p>

*/

const QUERY_ORGANIZATIONS = gql`
  query GetOrganizations {
    organizations {
      test
      test2
    }
  }
`

const QUERY_VALOD = gql`
  query Valod {
    isHere
  }
`

const Dashboard: React.FC<DashboardProps> = () => {
  const { loading, error, data } = useQuery(QUERY_VALOD)

  console.log('loading', loading)
  console.log('error', error?.message)
  console.log('data', data)

  return (
    <div className="px-14 py-8">
      <BaseCard>
        <BaseCardBody>
          <h1 className="text-3xl mb-8">Dashboard</h1>

          <p className="mb-4">{content}</p>
          <p className="mb-4">{content2}</p>
          <p className="mb-4">{content3}</p>
        </BaseCardBody>
      </BaseCard>
    </div>
  )
}

export default Dashboard
