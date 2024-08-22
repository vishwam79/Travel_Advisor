import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='bg-sky-700'>
    <div className='h-16  w-[95%] flex justify-between items-center mx-auto '>
        <div className="title"> 
            <h1 className='text-white font-bold text-2xl'> Travel Advisor </h1>
        </div>

        <div className="title flex gap-3 items-center ">
            <h3 className='text-l text-white items-center'> Explore New Places </h3>
            <CiSearch className='text-white items-center text-xl  '/>
            <input type="text" className='rounded-sm py-1 px-2' placeholder='Search...' />
        </div>

    </div>
    </div>
  )
}

export default Header;