import React from 'react'

export type BaseButtonProps = {}

const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>
}

export default BaseButton
