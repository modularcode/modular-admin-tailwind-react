import React from 'react'
// import clsx from 'clsx'

export type BaseTextProps = {}

const BaseText: React.FC<BaseTextProps> = (props) => {
  return <p {...props}>{props.children}</p>
}

export default BaseText
