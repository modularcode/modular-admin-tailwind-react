import React from 'react'

const BaseCardFooter: React.FC = (props) => {
  return <footer className="BaseCardFooter py-6 px-8 ">{props.children}</footer>
}

export default BaseCardFooter
