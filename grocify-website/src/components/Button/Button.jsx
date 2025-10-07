import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-7 py-3 text-white text-lg rounded-lg hover:to-orange-600 hover:scale-103 transition-all duration-300 cursor-pointer active:scale-100'>
            {props.content}
        </button>
    )
}

export default Button