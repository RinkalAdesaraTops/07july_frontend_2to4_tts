import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
      <Link to="/home">Home</Link> ||
      <a href="/about">About</a> ||
        <a href="/about/a1">About 1</a>
        <a href="/about/a2">About 2</a>
      <a href="/contact">Contact</a> 
    </div>
  )
}
export default Menu
 