import React from 'react'
import logo from "../assets/images/logo.png"
import { IoSearch } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex items-center p-3'>
        <img src={logo} alt='logo' width={60} height={60}/>
        <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
            <IoSearch/>
            <input type='text' placeholder='Select Your Video Game' className='bg-transparent px-2 outline-none'/>
        </div>
        <div>
          <FaMoon/>
        </div>
    </div>
  )
}

export default Header