import React from 'react'
import Headings from '../Headings/Headings'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    const leftValues = value.slice(0, 2).map(item => {
        return (
            <div>
                <div className='flex md:flex-row-reverse'>
                    <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex items-center justify-center text-3xl text-white'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    const rightValues = value.slice(2).map(item => {
        return (
            <div>
                <div className='flex'>
                    <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex items-center justify-center text-3xl text-white'>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 min-h-screen'>
                <Headings highlight="Our" heading="Value" />
                <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15'>
                    {/* Left  */}
                    <div className='flex-1 m-h-100 flex flex-col justify-between gap-15'>
                        {leftValues}
                    </div>
                    <div  className='md:flex w-2/5 hidden'>
                        <img src={basket} />
                    </div>
                    {/* Right  */}
                    <div className='flex-1 m-h-100 flex flex-col justify-between gap-15'>
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Values

const value = [
    {
        id: 1,
        title: "Trust",
        para: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        para: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        para: "It is simply dummy text of the printing and typesetting industry.",
        icon: <FaSeedling />
    },
    {
        id: 4,
        title: "100% Organic",
        para: "It is simply dummy text of the printing and typesetting industry.",
        icon: <FaShieldAlt />
    }
]