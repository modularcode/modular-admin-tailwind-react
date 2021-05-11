import React from 'react'
import BaseLink from '_common/BaseLink'

const TheFooter: React.FC = () => {
  return (
    <div className="TheFooter px-8  h-14 flex items-center justify-between text-gray-400 text-sm">
      <div>
        Modular Admin: TailwindCSS + React |{' '}
        <BaseLink
          href="https://github.com/modularcode/modular-admin-tailwind-react/blob/main/LICENSE"
          className="BaseLink"
        >
          MIT License
        </BaseLink>
      </div>
      <div>
        Built by{' '}
        <BaseLink
          href="https://www.linkedin.com/in/modularcoder"
          target="_blank"
          rel="noreferrer"
          className="BaseLink"
        >
          Gevorg Harutyunyan
        </BaseLink>
      </div>
    </div>
  )
}

export default TheFooter
