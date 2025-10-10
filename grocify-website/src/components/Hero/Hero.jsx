import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section className="w-full" id="home">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 min-h-screen flex flex-col md:flex-row justify-between items-center pt-36 md:pt-24">

                {/* Hero Text */}
                <div className="flex-1 text-center md:text-left space-y-5 -mt-5 sm:mt-3 md:mt-0">
                    <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm sm:text-base inline-block text-left">
                        Export Best Quality...
                    </span>

                    <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl leading-tight md:leading-[1.2]">
                        Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
                        <span className="text-orange-500">Vaggies</span> <br />
                        In Your City
                    </h1>

                    <p className="text-zinc-600 text-base sm:text-lg max-w-[530px] mx-auto md:mx-0 leading-relaxed sm:leading-7">
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>

                    <div className="mt-4">
                        <Button content="Shop Now" />
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src={Grocery}
                        alt="Hero"
                        className="w-[75%] sm:w-[65%] md:w-[85%] max-w-[430px] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
