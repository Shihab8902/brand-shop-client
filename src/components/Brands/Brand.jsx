import React from 'react'
import { useNavigate } from 'react-router-dom';

const Brand = ({ brand }) => {
    const navigate = useNavigate()

    const { name, image } = brand;

    const handleProductRedirect = () => {
        const nameParams = name.toLowerCase();
        navigate(`/brand/${nameParams}`);
    }


    return <div onClick={handleProductRedirect} className='border-2 p-5 cursor-pointer rounded-md'>
        <img className='w-full' src={image} alt={name} />
        <h3 className='text-center font-semibold text-xl'>{name}</h3>
    </div>
}

export default Brand