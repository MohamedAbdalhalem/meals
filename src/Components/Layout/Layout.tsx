import React from 'react'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}
