import React from 'react'

export type BaseHeadingProps = {}

const BaseHeading: React.FC<BaseHeadingProps> = (props) => {
  return <h3 {...props}>{props.children}</h3>
}

export default BaseHeading
