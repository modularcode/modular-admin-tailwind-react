import React, { memo } from 'react'
import BaseLogo from '_common/BaseLogo'
import SidebarNav from './SidebarNav'

type TheSidebarProps = {}

const TheSidebar: React.FC<TheSidebarProps> = () => {
  return (
    <div className="TheSidebar absolute h-full w-full flex flex-col">
      <div className="h-20 flex items-center top-0 px-4">
        <BaseLogo size={30} className="ml-10 mr-4 text-primary-500" />{' '}
        ModularAdmin
      </div>
      <div className="SidebarNavContainer flex-1 overflow-y-auto ">
        <SidebarNav />
      </div>
      <div className="SidebarFooterContainer p-4">Sidebar Footer</div>
    </div>
  )
}

export default memo(TheSidebar)
