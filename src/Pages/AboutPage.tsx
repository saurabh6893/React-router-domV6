import React from 'react'
import './AboutPage.css'
import Navbar from '../Components/Navbar'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='about-container'>
        <h1 className='aboutname'>Saurabh Kishor Kedar</h1>
        <h3 className='aboutcontact'>Phone: 832-915-2215</h3>
        <h3 className='aboutcontact'>Email: saurabhkedar@gmail.com</h3>
        <a className='github' href='https://github.com/saurabh6893'>
          My GitHub
        </a>
      </div>
    </>
  )
}

export default AboutPage
