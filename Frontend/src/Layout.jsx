import React from 'react'
import Header from './utility/Header'
import Footer from './utility/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      
    </div>
  )
}

export default Layout
