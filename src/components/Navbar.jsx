import React from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
      <div className="nav flex flex-row-reverse sm:flex-row items-center justify-between px-6 sm:px-[100px] h-[70px] sm:h-[90px] border-b border-gray-800">
        
        <div className="logo order-2 sm:order-1">
          <h3 className="text-[25px] font-[700] sp-text">GenUI</h3>
        </div>

        <div className="icons flex items-center gap-[15px] order-1 sm:order-2">
          <div className="icon text-[20px]"><HiSun /></div>
          <div className="icon text-[20px]"><FaUser /></div>
          <div className="icon text-[20px]"><RiSettings3Fill /></div>
        </div>

      </div>
    </>
  )
}

export default Navbar
