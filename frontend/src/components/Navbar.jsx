import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className="w-[150px] cursor-pointer"  src={logo}/>
        </div>
        <div className="links flex items-center gap-2">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/services'>Services</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
