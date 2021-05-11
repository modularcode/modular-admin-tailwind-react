import React from 'react'
import faker from 'faker'

type DashboardProps = {}

const content = faker.lorem.paragraphs(3)
const content2 = faker.lorem.paragraphs(3)
const content3 = faker.lorem.paragraphs(3)

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="px-14 py-8">
      <div className="bg-white shadow-sm py-6 px-8 rounded">
        <h1 className="text-3xl mb-8">Dashboard</h1>
        <p className="mb-4">{content}</p>
        <p className="mb-4">{content2}</p>
        <p className="mb-4">{content3}</p>
      </div>
    </div>
  )
}

export default Dashboard
