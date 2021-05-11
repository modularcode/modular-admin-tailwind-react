import React, { useState, useCallback } from 'react'
import clsx from 'clsx'

import TheHeader from '_common/TheHeader'
import TheFooter from '_common/TheFooter'
import TheSidebar from '_common/TheSidebar'

const DashboardLayout: React.FC = ({ children }) => {
  console.log('render DashboardLayout')

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)

  const handleSidebarToggleClick = useCallback(() => {
    setIsSidebarCollapsed((isCollapsed) => !isCollapsed)
  }, [])

  return (
    <div className="w-full mx-auto flex">
      {/* Sidebar */}
      <div
        id="AppSidebarContainer"
        className={clsx(
          `
            z-40 inset-0 flex-none h-screen
            fixed lg:sticky top-0
            lg:block lg:left-0 xl:left-0
            w-full lg:w-60 xl:w-72

          `,
          isSidebarCollapsed && '-left-full',
        )}
      >
        <div
          className="absolute t-0 w-full h-full bg-black bg-opacity-25"
          onClick={handleSidebarToggleClick}
        ></div>
        <div
          className={clsx(
            `
            absolute t-0 w-60 xl:w-72 h-full
            lg:left-0
            ease-in-out
            transition-all
            duration-300
            bg-red
          `,
            isSidebarCollapsed ? '-left-full md:-left-full' : 'left-0',
          )}
        >
          <TheSidebar />
        </div>
      </div>
      {/* Content */}
      <div id="AppContentContainer" className="w-full min-h-screen flex-auto">
        {/* Header */}
        <div
          id="AppHeaderContainer"
          className="w-full bg-gray-200 h-16 sticky top-0 self-start"
        >
          <TheHeader onSidebarToggleClick={handleSidebarToggleClick} />
        </div>
        {/* Page */}
        <div
          id="AppPageContainer"
          className="
            bg-yellow-100
          "
        >
          {children}
        </div>
        <TheFooter />
      </div>
    </div>
  )
}

export default DashboardLayout
