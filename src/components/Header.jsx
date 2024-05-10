import React from 'react'
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <div>
        <img src={logo} alt='logo' width={60} height={60}/>
        <div>
            <input type='text'/>
        </div>
    </div>
  )
}

export default Header