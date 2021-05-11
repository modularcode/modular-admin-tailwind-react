import React from 'react'
import faker from 'faker'
import { BaseCard, BaseCardBody } from '_common/BaseCard'

type DashboardProps = {}

const content = faker.lorem.paragraphs(3)
const content2 = faker.lorem.paragraphs(3)
const content3 = faker.lorem.paragraphs(3)

const Dashboard: React.FC<DashboardProps> = () => {
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
