import React, { useEffect, useState } from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5"; // Cross icon import

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

    const toggle = () => {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={` bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? "shadow-lg" : null}`}>
            <nav className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 md:h-[14vh] h-[12vh] flex justify-between items-center'>
                {/* Logo */}
                <a href="" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</a>

                {/* Desktop Menu */}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li><a href="" className='font-semibold tracking-wide text-orange-500'>Home</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>About Us</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>Process</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>Contact Us</a></li>
                </ul>

                {/* Nav input */}
                <div className='flex items-center gap-x-3 mb-1'>
                    <div className='md:flex border-2 border-orange-500 p-1 rounded-full hidden'>
                        <input type="text" name="text" id="" placeholder='Search...' autoComplete='off' className='flex-1 h-[6vh] focus:outline-none px-3' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-600 text-white text-2xl flex justify-center items-center w-10 h-10 rounded-full hover:bg-gradient-to-t from-orange active:bg-gradient-to-b to bg-orange-500'><IoIosSearch /></button>
                    </div>
                    <a href="" className='text-zinc-800 text-2xl mt-1'><TiHeartFullOutline /></a>
                    <a href="" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>
                    {/* Hamburger / Cross */}
                    <button className='text-zinc-800 text-3xl items-center mt-1 md:hidden' onClick={toggle}>
                        {showMenu ? <IoClose /> : <IoMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul className={`flex flex-col gap-y-12 p-10 bg-orange-500/18 backdrop-blur-xl rounded-2xl shadow-xl items-center gap-x-15 md:hidden 
                    absolute top-30 right-0 transform transition-transform duration-500 ease-in-out 
                    ${showMenu ? "translate-x-0" : "translate-x-full"}`}>

                    <li><a href="" className='font-semibold tracking-wide text-orange-500'>Home</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>About Us</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>Process</a></li>
                    <li><a href="" className='font-semibold tracking-wide text-zinc hover:text-orange-500'>Contact Us</a></li>

                    <li className='flex border-2 border-orange-500 p-1 rounded-full md:hidden'>
                        <input type="text" name="text" id="" placeholder='Search...' autoComplete='off' className='flex-1 h-[6vh] focus:outline-none px-3' />
                        <button className='bg-gradient-to-b from-red-600 to-orange-600 text-white text-2xl flex justify-center items-center w-10 h-10 rounded-full hover:bg-gradient-to-t from-orange active:bg-gradient-to-b to bg-orange-500 mt-1.5'><IoIosSearch /></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
