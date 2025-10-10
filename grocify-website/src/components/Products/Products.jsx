import React, { useState, useMemo } from 'react'
import Headings from '../Headings/Headings'
import ProductsList from '../ProductsList/ProductsList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {
    const categories = useMemo(() => ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"], [])
    const [activeTab, setActiveTab] = useState("All")
    const visibleCount = 8

    const filteredProducts = useMemo(() => {
        return activeTab === "All"
            ? ProductsList
            : ProductsList.filter(product => product.category === activeTab)
    }, [activeTab])

    const visibleProducts = filteredProducts.slice(0, visibleCount)

    return (
        <section className="py-10" id="products">
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20'>
                <Headings highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className='flex flex-wrap gap-4 justify-center mt-8'>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-5 py-2 cursor-pointer text-lg rounded-xl transition 
                                ${activeTab === category
                                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                                    : "bg-zinc-100 hover:bg-zinc-200"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Listing */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
                    {visibleProducts.map(product => (
                        <Cards
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link to={"/allproducts"} className='bg-gradient-to-b from-orange-400 to-orange-500 px-7 py-3 text-white text-lg rounded-lg hover:to-orange-600 hover:scale-103 transition-all duration-300 cursor-pointer active:scale-100'> See All </Link>
                </div>
            </div>
        </section>
    )
}

export default Products
