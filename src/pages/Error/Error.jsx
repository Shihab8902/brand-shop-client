import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <h1 className='text-7xl font-semibold mb-5'>404</h1>
            <p className='italic text-gray-500 font-medium mb-3'>The page you are looking for, does not exist!</p>
            <button onClick={() => navigate(-1)} className='bg-red-500 text-lg px-6 py-3 rounded-lg text-white font-semibold '>Go back</button>
        </div>
    )
}

export default Error