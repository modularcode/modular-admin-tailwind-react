import React from 'react'
import faker from 'faker'

type AdministrationProps = {}

const content = faker.lorem.paragraphs(50)

const Administration: React.FC<AdministrationProps> = () => {
  return (
    <div className="px-14 py-8">
      <div className="bg-white shadow-sm py-6 px-8 rounded">
        Administration: {content}
      </div>
    </div>
  )
}

export default Administration
