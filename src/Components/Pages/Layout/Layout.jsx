import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'

function Layout() {
  return (
    <div>
      <Topbar/>
      <main >
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  )
}

export default Layout