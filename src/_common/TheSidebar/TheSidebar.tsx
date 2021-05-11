import React, { memo } from 'react'
import BaseLogo from '_common/BaseLogo'

type TheSidebarProps = {}

const TheSidebar: React.FC<TheSidebarProps> = () => {
  return (
    <div className="TheSidebar absolute h-full w-full flex flex-col">
      <div className="h-16 flex items-center top-0 px-4">
        <BaseLogo size={30} className="ml-10 mr-4 text-purple-500" />{' '}
        ModularAdmin
      </div>
      <div id="AppSidebarNav" className="" style={{ height: 300 }}>
        Nav Menu
      </div>
    </div>
  )
}

export default memo(TheSidebar)
