import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import './HomePage.css'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default HomePage
