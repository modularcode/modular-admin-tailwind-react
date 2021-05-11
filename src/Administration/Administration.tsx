import React from 'react'
import faker from 'faker'

type AdministrationProps = {}

const content = faker.lorem.paragraphs(50)

const Administration: React.FC<AdministrationProps> = () => {
  return <div className="px-14 py-8">Administration: {content}</div>
}

export default Administration
