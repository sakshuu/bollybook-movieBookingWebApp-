import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, MyNavbar } from '../../components'

const User = () => {
  return <>
  <MyNavbar/>
  <Outlet/>
  <Footer/>
  </>
}

export default User