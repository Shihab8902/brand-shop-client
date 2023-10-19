import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

const NewsLetter = () => {
    return <div className='border container mx-auto px-5 py-20'>
        <h3 className='text-center font-medium  text-4xl my-5 '>Stay in touch</h3>
        <p className='text-center text-gray-500 '>Subscribe to our newsletter to get alert for our special offers and discounts!</p>
        <div className=' md:w-3/5 mx-auto mt-10 relative'>
            <input type="text" placeholder="Enter your email address" className="w-full py-4 px-3 border-2 border-blue-500 rounded-lg outline-none" />
            <FaPaperPlane className='absolute right-4 text-xl cursor-pointer  bottom-5' />
        </div>
    </div>
}

export default NewsLetter