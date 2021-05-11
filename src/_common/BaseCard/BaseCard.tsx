import React from 'react'

const BaseCard: React.FC = (props) => {
  return (
    <div className="BaseCard bg-white shadow-sm rounded">{props.children}</div>
  )
}

export default BaseCard
