import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import bgSeaFoods from '../../assets/seafood-banner.jpg'

const SeaFoods = () => {
  return (
    <div>
      <Categorypage title={"Meat & Sea Foods"} bgImage={bgSeaFoods} categories={["Meat", "SeaFood"]} />
    </div>
  )
}

export default SeaFoods