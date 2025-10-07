import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400] mx-auto px-10 min-h-screen flex justify-between items-center pt-20'>
                {/* Hero Text  */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='font-bold text-7xl/20 mt-4'>Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Vaggies</span> <br/>In Your City</h1>
                    <p className='text-zinc-600 text-lg max-w-[530] mt-5 mb-10'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <Button content="Shop Now" />
                </div>
                {/* Hero Image  */}
                <div className='flex-1'>
                    <img src={Grocery} alt="Hero Image" className='' />
                </div>
            </div>
        </section>
    )
}

export default Hero