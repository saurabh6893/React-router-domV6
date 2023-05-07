import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
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
