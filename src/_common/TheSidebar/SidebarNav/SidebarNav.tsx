import React from 'react'

const links = [{ name: 'Dashboard' }, { name: 'Administration' }]

const SidebarNav = () => {
  return (
    <div id="AppSidebarNav" className="px-4 py-4">
      {links.map((link) => (
        <a
          href="/core/dashboard"
          className="block px-4 py-3 pl-12 mb-2 hover:text-purple-500 rounded-lg hover:bg-purple-50 font-semibold"
          key={link.name}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default SidebarNav
