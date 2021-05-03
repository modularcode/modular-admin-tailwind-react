import React, { memo } from 'react'

type TheSidebarProps = {}

const TheSidebar: React.FC<TheSidebarProps> = () => {
  console.log('render TheSidebar')

  return (
    <div className="absolute h-full w-full flex flex-col bg-green-50">
      <div className="h-16 bg-red-100 top-0">Logo</div>
      <div id="AppSidebarNav" className="bg-blue-200" style={{ height: 300 }}>
        Nav Menu
      </div>
    </div>
  )
}

export default memo(TheSidebar)
