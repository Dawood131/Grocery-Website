import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import bgfruit from '../../assets/fruits-banner.jpg'

const Fruit = () => {
  return (
    <div>
      <Categorypage title="Fruits & Vaggies" bgImage={bgfruit} categories={["Fruits", "Vegetables"]} />
    </div>
  )
}

export default Fruit