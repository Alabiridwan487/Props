import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='h-[50px] shadow flex justify-between items-center px-10'>
        <div className='flex items-center'>
            <div>
                <img src="./caerus_logo.png.png" alt="" className='Logo'/>
            </div>

            <div className='flex items-center bg-gray-100 rounded p-1 ms-4'>
            <CiSearch />
                <input type="search" name='' id='' placeholder='Search...' className='focus:outline-none'/>
            </div>
        </div>

        <div className='flex items-center'>
        <div className='me-3'>
        <CiBellOn className='text-2xl relative'/>
        <p className='h-4 w-4 bg-red-600 text-white rounded-full text-xs flex items-center justify-center absolute top-2 right-20'>2</p>
        </div>
        <RxAvatar className='text-3xl'/>
        </div>
    </nav>
  )
}

export default Navbar