import React from 'react'
import Headings from '../Headings/Headings'
import FruitCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom'

const Category = () => {
    // Card 
    const rendercard = foodcategory.map(card => {
        return (
            <div key={card.id} className='flex-1'>
                {/* Card Image  */}
                <div className='w-full min-h-[30vh] relative -mb-15'>
                    <img src={card.image} className='absolute bottom-0' alt={card.title} />
                </div>
                {/* Card Content  */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl flex flex-col' style={{ minHeight: "350px" }}>
                    <div className='flex-1'>
                        <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                        <p className='text-zinc-600 mt-3 mb-8'>{card.description}</p>
                    </div>
                    <div>
                        <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 px-7 py-3 text-white text-lg rounded-lg hover:to-orange-600 hover:scale-103 transition-all duration-300 cursor-pointer active:scale-100'>See All</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="mb-20" id="categories">
            <div className='mt-5'>
                <Headings highlight="Shop" heading="By Category" />
            </div>
            <div className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 flex md:flex-row flex-col gap-10'>
                {rendercard}
            </div>
        </section>
    )
}

export default Category

const foodcategory = [
    {
        id: 1,
        title: "Fruits & Veggies",
        description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        image: FruitCat,
        path: "/fruit"
    },
    {
        id: 2,
        title: "Dairy & Eggs",
        description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image: DairyCat,
        path: "/dairy"
    },
    {
        id: 3,
        title: "Meat & SeaFood",
        description: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        image: SeaFoodCat,
        path: "/seafoods"
    }
]
