import React, { useState } from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ image, name, price }) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className="bg-zinc-100 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105
                        flex flex-col items-center p-4 w-full max-w-[250px] mx-auto">

            {/* Cards Icon */}
            <div className="flex justify-between w-full mb-3 items-center">
                {/* Heart */}
                <span
                    className={`text-2xl cursor-pointer ${liked ? 'text-red-600' : 'text-gray-400'}`}
                    onClick={() => setLiked(!liked)}
                >
                    <FaHeart />
                </span>

                {/* Plus button */}
                <button className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition">
                    <FaPlus />
                </button>
            </div>

            {/* Cards Image */}
            <div className="flex justify-center mb-3 w-full">
                <img src={image} alt={name} className="h-40 w-auto object-contain" />
            </div>

            {/* Cards Content */}
            <div className="text-center mt-auto w-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{name}</h3>
                <p className={`text-gray-700 text-lg sm:text-lg ${liked ? 'font-bold text-xl' : ''}`}>
                    ${price.toFixed(2)}
                </p>
                <div className="mt-3 flex justify-center">
                    <Button content="Shop Now" />
                </div>
            </div>
        </div>
    )
}

export default Cards
