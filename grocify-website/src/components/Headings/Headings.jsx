import React from 'react'

const Headings = (props) => {
  return (
      <div className='text-zinc-800 w-fit mx-auto md:text-5xl text-4xl font-bold'>
                    <span className='text-orange-500'>{props.highlight}</span> {props.heading}
                <div className='w-34 h-1 bg-orange-300 md:mt-5 mt-2 ml-auto'></div>
                </div>
  )
}

export default Headings