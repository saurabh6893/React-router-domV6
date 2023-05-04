import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'

const Error = () => {
  return (
    <div className='error-container'>
      <h1 className='error-heading'>404</h1>
      <p className='error-text'>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to='/' className='error-link'>
        Go back to homepage
      </Link>
    </div>
  )
}

export default Error
