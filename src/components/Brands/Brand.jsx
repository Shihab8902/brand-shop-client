import React from 'react'

const Brand = ({ brand }) => {
    const { name, image } = brand;


    return <div className='border-2 p-5 cursor-pointer rounded-md'>
        <img className='w-full' src={image} alt={name} />
        <h3 className='text-center font-semibold text-xl'>{name}</h3>
    </div>
}

export default Brand