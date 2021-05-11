import React from 'react'

const BaseCardHeader: React.FC = (props) => {
  return <header className="BaseCardHeader py-6 px-8">{props.children}</header>
}

export default BaseCardHeader
