import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const items = [
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Administration',
    link: '/administration',
  },
]

const SidebarNav = () => {
  return (
    <div id="AppSidebarNav" className="px-4 py-4">
      {items.map((item) => (
        <NavLink
          to={item.link}
          className="block px-4 py-3 pl-12 mb-2 hover:text-purple-500 rounded-lg hover:bg-purple-50 font-semibold"
          key={item.name}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

export default SidebarNav
