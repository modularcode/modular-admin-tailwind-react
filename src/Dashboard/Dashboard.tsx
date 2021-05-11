import React from 'react'
import faker from 'faker'

type DashboardProps = {}

const content = faker.lorem.paragraphs(50)

const Dashboard: React.FC<DashboardProps> = () => {
  return <div className="px-14 py-8">{content}</div>
}

export default Dashboard
