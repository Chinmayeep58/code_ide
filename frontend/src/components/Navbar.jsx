import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import { MdLightMode} from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { toggleClass } from '../helper';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
          <div onClick={()=>{toggleClass(".dropDown", ".hidden")}} className='w-[22px] h-[22px] left-5px bg-[#fff] cursor-pointer rounded-lg'></div>
        </div>
        <div className="dropDown absolute hidden right-[0px] top-[10px] bg-[#1A1919] w-[180px] h-[100px] ">
          <div className='py-[10px] border-b-[1px] border-b-[#fff'>
            <h3 className='text-[18px]'>Chinmayee</h3>
          </div>
          <i className='text-[18px] gap-2 flex items-center cursor-pointer'><MdLightMode />Light mode</i>
          <i className='text-[18px] gap-2 flex items-center cursor-pointer'><IoGridSharp />Grid layout</i>
        </div>
      </div>
    </>
  )
}

export default Navbar
