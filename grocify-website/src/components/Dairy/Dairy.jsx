import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import bgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
    return (
        <div>
            <Categorypage title="Dairy & Eggs" bgImage={bgDairy} categories={["Dairy"]} />
        </div>
    )
}

export default Dairy