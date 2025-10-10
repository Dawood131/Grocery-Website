import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import bgAll from '../../assets/all-banner.jpg'
const AllProducts = () => {
  return (
    <div>
      <Categorypage title={"All Products"} bgImage={bgAll} categories={["All"]} />
    </div>
  )
}

export default AllProducts