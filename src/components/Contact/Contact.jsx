import React from 'react'

import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return <div className='container mx-auto my-20  flex-col lg:flex-row flex justify-between items-center gap-10'>

        <form className='shadow-2xl  px-2 md:px-7 py-14'>
            <h3 className='text-center font-medium text-3xl '>Ask us anything here</h3>
            <div className='flex flex-col md:flex-row items-center gap-3 mt-10 mb-5'>
                <input className='border-2 outline-none px-4 py-4 w-full rounded-lg' type="text" name="name" id="name" placeholder='Name' required />
                <input className='border-2 outline-none px-4 py-4 w-full rounded-lg' type="email" name="email" id="email" placeholder='Email' required />
            </div>
            <input className='border-2  outline-none px-4 py-4 w-full rounded-lg' type="text" name="subject" id="subject" placeholder='Subject' required />
            <textarea name="message" id="message" className='border-2 my-5 outline-none px-4 py-4 w-full rounded-lg h-[200px] resize-none' required placeholder='Message'></textarea>
            <input type="submit" className='w-full bg-red-500 py-4 text-white rounded-lg  cursor-pointer' value="Send Message" />
        </form>



        <div>

            <div className='flex gap-4 mb-20'>
                <BsTelephone className='text-7xl text-red-500' />
                <div>
                    <p className='text-gray-500 mb-1'>Call for help now</p>
                    <a className='md:text-4xl font-semibold ' href="tel:+91-7654321">+91-7654321</a>
                </div>
            </div>

            <div className='flex gap-4 mb-20'>
                <MdOutlineMailOutline className='text-7xl text-red-500' />
                <div>
                    <p className='text-gray-500 mb-1'>Say hello</p>
                    <a className='md:text-2xl font-semibold ' href="mailto:info@bytesync.com">info@bytesync.com</a>
                </div>
            </div>

            <div className='flex gap-4 mb-20'>
                <FiMapPin className='text-7xl text-red-500' />
                <div>
                    <p className='text-gray-500 mb-1'>Address</p>
                    <p className='font-semibold md:text-2xl'>1259 Freedom, New York United States</p>
                </div>
            </div>

        </div>


    </div>
}

export default Contact