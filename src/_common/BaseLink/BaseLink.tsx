import React, { AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'

const BaseLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return (
    <a {...props} className={clsx('text-primary-600 hover:underline')}>
      {props.children}
    </a>
  )
}

export default BaseLink
