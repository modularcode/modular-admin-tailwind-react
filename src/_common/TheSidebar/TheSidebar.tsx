import React, { memo } from 'react'

type TheSidebarProps = {}

const TheSidebar: React.FC<TheSidebarProps> = () => {
  console.log('render TheSidebar')

  return (
    <div className="TheSidebar absolute h-full w-full flex flex-col">
      <div className="h-16 flex items-center top-0 px-4">Logo</div>
      <div id="AppSidebarNav" className="" style={{ height: 300 }}>
        Nav Menu
      </div>
    </div>
  )
}

export default memo(TheSidebar)
