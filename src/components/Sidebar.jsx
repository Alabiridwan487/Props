import React from 'react'
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { LiaBlogSolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <aside className='min-h-screen w-[25%]'>
        <div>
            <div className='flex items-center m-4 rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-300 ease-out'>
            <IoHome />
            <p className='ms-4'>Dashboard</p>
            </div>

            <div className='flex items-center m-4 rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-300 ease-out'>
            <RiTeamFill />
            <p className='ms-4'>Team</p>
            </div>

            <div className='flex items-center m-4 rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-300 ease-out'>
            <GrProjects />
            <p className='ms-4'>Projects</p>
            </div>

            <div className='flex items-center m-4 rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-300 ease-out'>
            <SlCalender />
            <p className='ms-4'>Calender</p>
            </div>

            <div className='flex items-center m-4 rounded p-2 hover: bg-gray-100 cursor-pointer hover:text-purple-600 hover:font-bold duration-300 ease-out'>
            <LiaBlogSolid />
            <p className='ms-4'>Blogs</p>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar