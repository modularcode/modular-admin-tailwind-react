import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import GitHubButton from 'react-github-btn'
import BaseLogo from '_common/BaseLogo'
import SidebarNav from './SidebarNav'

type TheSidebarProps = {}

const TheSidebar: React.FC<TheSidebarProps> = () => {
  return (
    <div className="TheSidebar absolute h-full w-full flex flex-col">
      <div className="h-20 flex items-center top-0 px-4">
        <NavLink to="/" className="flex items-center ">
          <BaseLogo
            size={30}
            className="ml-10 mr-4 text-primary-500 align-middle"
          />{' '}
          <span className="font-bold  align-middle relative ">
            Modular Admin
            <span
              className="
                absolute bg-indigo-400 opacity-60 text-white rounded px-1 py-0 top-full -right-2
                whitespace-nowrap
                font-normal
              "
              style={{
                fontSize: '.5em',
              }}
            >
              Tailwind + React
            </span>
          </span>
        </NavLink>
      </div>
      <div className="SidebarNavContainer flex-1 overflow-y-auto ">
        <SidebarNav />
      </div>
      <div
        className="
          SidebarFooterContainer
          px-4 py-2 text-sm bg-opacity-75 text-center flex justify-around items-center
          h-14
        "
      >
        <GitHubButton
          href="https://github.com/modularcode/modular-admin-tailwind-react"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star modularcode/modular-admin-tailwind-react on GitHub"
        >
          Star the project 🚀
        </GitHubButton>
      </div>
    </div>
  )
}

export default memo(TheSidebar)
