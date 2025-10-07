import React from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
    return (
        <header>
            <nav className='max-w-[1200px] mx-auto px-10 h-[14vh] flex justify-between items-center'>
                {/* Logo */}
                <a href="" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</a>
                {/* Desktop Menu */}
                <ul className='flex items-center gap-x-15'>
                    <li><a href="" className='font-semibold tracking-wide text-orange-500'>Home</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>About Us</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>Process</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>Contact Us</a></li>
                </ul>
                {/* Nav input */}
                <div className='flex items-center gap-x-3'>
                    <div className='flex border-2 border-orange-500 p-1 rounded-full'>
                        <input type="text" name="text" id="" placeholder='Search...' autoComplete='off' className='flex-1 h-[6vh] focus:outline-none px-3' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-600 text-white text-2xl flex justify-center items-center w-10 h-10 rounded-full hover:bg-gradient-to-t from-orange'><IoIosSearch /></button>
                    </div>
                    <a href="" className='text-zinc-800 text-2xl'><TiHeartFullOutline /></a>
                    <a href="" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar