import React from 'react'
import Button from '../Button/Button'
import Fruitset from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-contain bg-right' style= {{backgroundImage:`url(${Fruitset})`}}>
      <div className='md:bg-transparent bg-zinc-100 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-10 flex flex-col md:flex-row items-center gap-2 md:gap-4'>
        
        {/* Discount Percentage */}
        <span className='text-6xl sm:text-7xl md:self-center self-start md:text-9xl text-orange-500 font-bold transform md:-rotate-90 rotate-0'>
          20%
        </span>

        {/* Discount Text */}
        <div className='max-w-[650px]'>
          <h3 className='text-3xl sm:text-4xl md:text-7xl text-zinc-800 font-bold'>
            First Order Discount!
          </h3>
          <p className='text-zinc-600 my-4 sm:my-6 text-base sm:text-lg'>
            Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>

      </div>
    </section>
  )
}

export default Discount
