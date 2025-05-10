import React from 'react'

const Hamburger = () => {
    return (
        <div className='flex flex-col justify-between items-center h-3'>
            <div className="hamburger-line w-2 h-[1px] bg-black"></div>
            <div className="hamburger-center w-2 h-[6px] bg-black"></div>
            <div className="hamburger-line w-2 h-[1px] bg-black"></div>
        </div>
    )
}

export default Hamburger