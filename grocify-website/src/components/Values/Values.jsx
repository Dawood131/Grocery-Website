import React from 'react'
import Headings from '../Headings/Headings'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    return (
        <section>
            <div>
                <Headings highlight="Our" heading="Value" />
                <div className='flex'>
                    <div></div>
                    <div>
                        <img src= {basket}/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Values

const value = [
    {
        id: 1,
        title: "Trust",
        para: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        para: "It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable.",
        icon: <FaSeedling />
    },
    {
        id: 4,
        title: "100% Organic",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <FaShieldAlt />
    }
]