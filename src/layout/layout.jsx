import { Outlet } from "react-router-dom"
import Navbar from "../Navigation/Navbar"
import Footer from "../Navigation/Footer"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
