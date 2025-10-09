import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <section>
            <footer className='bg-zinc-100 py-20'>
                <div className='flex flex-wrap max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 gap-y-10'>
                    <div className='flex-1 basis-[300px]'>
                        <a href="" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cify</a>
                        <p className='text-zinc-600 mt-6 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                        <p className='text-zinc-800 mt-6'>
                            2025 &copy; All Right Reserved
                        </p>
                    </div>
                    <ul className='flex-1'>
                        <li>
                            <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                        </li>
                        <li className='mt-6'>
                            <a href="" className='text-zinc-800 hover:text-orange-500'>About</a>
                        </li>
                        <li className='mt-6'>
                            <a href="" className='text-zinc-800 hover:text-orange-500'>FAQ'S</a>
                        </li>
                    </ul>
                    <ul className='flex-1'>
                        <li>
                            <h5 className='text-zinc-800 text-2xl font-bold'>Sport</h5>
                        </li>
                        <li className='mt-6'>
                            <a href="" className='text-zinc-800 hover:text-orange-500'>Sport Center</a>
                        </li>
                        <li className='mt-6'>
                            <a href="" className='text-zinc-800 hover:text-orange-500'>FeedBack</a>
                        </li>
                        <li className='mt-6'>
                            <a href="" className='text-zinc-800 hover:text-orange-500'>Contact us</a>
                        </li>
                    </ul>
                    <div className='flex-1'>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                        <p className='text-zinc-800 mt-6'>Question  or Feedback <br /> we'd love to hear from you</p>
                        <div className='flex p-1 mt-6 rounded-lg bg-white'>
                            <input type="email" name="" id="email" autoComplete='off' placeholder='Email Address' className='flex-1 pl-4 focus:outline-none' />
                            <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:bg-gradient-to-t orange-600 cursor-pointer'><IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer