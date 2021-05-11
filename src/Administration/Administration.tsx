import React from 'react'
import faker from 'faker'
import { BaseCard, BaseCardBody } from '_common/BaseCard'

type AdministrationProps = {}

const content = faker.lorem.paragraphs(50)

const Administration: React.FC<AdministrationProps> = () => {
  return (
    <div className="px-14 py-8">
      <BaseCard>
        <BaseCardBody>Administration: {content}</BaseCardBody>
      </BaseCard>
    </div>
  )
}

export default Administration
