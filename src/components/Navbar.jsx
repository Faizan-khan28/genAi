import React from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
      <div className="nav flex flex-row-reverse sm:flex-row items-center justify-between px-6 sm:px-[100px] h-[70px] sm:h-[90px]
        border-b border-purple-700 bg-gradient-to-r from-[#1a0033] via-[#2e0055] to-[#1a0033] shadow-[0_0_6px_rgba(139,92,246,0.2)]">

        {/* Logo */}
        <div className="logo order-2 sm:order-1">
          <h3 className="text-[25px] font-[700] bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400
            text-transparent bg-clip-text cursor-pointer hover:scale-105 
            transition-all duration-300 ease-in-out">
            GenUI
          </h3>
        </div>

        {/* Icons */}
        <div className="icons flex items-center gap-[16px] order-1 sm:order-2 text-purple-200">
          <div className="icon text-[21px] hover:text-fuchsia-400 hover:scale-105 transition-all duration-300 cursor-pointer">
            <HiSun />
          </div>
          <div className="icon text-[21px] hover:text-purple-400 hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaUser />
          </div>
          <div className="icon text-[21px] hover:text-pink-400 hover:scale-105 transition-all duration-300 cursor-pointer">
            <RiSettings3Fill />
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
