import React from 'react'
import { Outlet } from 'react-router'

const About = () => {
  return (
    <div>
      <h3>About Page</h3>
      <Outlet />
    </div>
  )
}

export default About
