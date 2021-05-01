import React from 'react'

type DashboardProps = {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="w-full h-full max-w-8xl mx-auto">
      <div className="lg:flex h-screen">
        {/* Sidebar */}
        <div
          id="AppSidebarContainer"
          className="
            overflow-scroll
            z-40 inset-0 flex-none h-screen bg-black bg-opacity-25 w-full
            static top-0 hidden
            lg:w-60 xl:w-72 lg:block
          "
        >
          <div className="h-16 bg-red-100 sticky top-0">Logo</div>
          <div id="AppSidebarNav" className="bg-blue-200" style={{ height: 300 }}>
            Nav Menu
          </div>
        </div>
        {/* Content */}
        <div id="AppContentContainer" className="w-full h-screen overflow-scroll">
          {/* Header */}
          <div id="AppHeaderContainer" className="w-full bg-gray-200 h-16 sticky top-0">
            Header
          </div>
          {/* Page */}
          <div id="AppPageContainer" className="bg-yellow-100" style={{ height: 1500 }}>
            Content
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
