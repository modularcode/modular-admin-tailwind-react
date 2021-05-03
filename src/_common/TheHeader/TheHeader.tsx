import React, { MouseEvent, memo } from 'react'

type TheHeaderProps = {
  onSidebarToggleClick(e: MouseEvent<HTMLButtonElement>): void
}

const TheHeader: React.FC<TheHeaderProps> = ({ onSidebarToggleClick }) => {
  console.log('render The Header')

  return (
    <div className="absolute flex w-full h-full item-center p-4 bg-green-50">
      <button onClick={onSidebarToggleClick} className="mr-auto lg:hidden">
        Toggle Sidbar
      </button>
      <div>The Header</div>
    </div>
  )
}

export default memo(TheHeader)
