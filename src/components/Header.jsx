import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import {ThemeContext} from "../context/ThemeContext"

const Header = () => {
  const [toggle, setToggel] = useState(true);
  const {theme,setTheme} = useContext(ThemeContext)
  useEffect(() =>{
    console.log("Theme", theme);
  },[])
  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <IoSearch />
        <input
          type="text"
          placeholder="Select Your Video Game"
          className="bg-transparent px-2 outline-none"
        />
      </div>
      <div>
        {theme==="light" ? (
          <FaMoon
            className="text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme("dark");localStorage.setItem("theme", "dark")}}
          />
        ) : (
          <MdSunny
            className="text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer"
            onClick={() =>{setTheme("light");localStorage.setItem("theme", "light")}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
