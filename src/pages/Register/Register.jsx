import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);




    return <>

        <div className='md:w-1/2 mx-auto my-10 border-2 p-10 container '>
            <img src={logo} className='w-[200px] mx-auto' alt="" />
            <h3 className='font-semibold text-3xl  mb-2 mt-5'>Register</h3>
            <p className='text-gray-500 text-sm'>Enter your details to  register your account.</p>

            <form className='mt-14'>
                <div>
                    <label className='font-semibold' htmlFor="name">Name</label>
                    <input className='w-full mb-6 mt-2  py-4 px-5 rounded-md border-2 outline-none' type="text" name="name" id="name" placeholder='Enter your name' required />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="email">Email</label>
                    <input className='w-full mt-2  mb-6 py-4 px-5 rounded-md border-2 outline-none' type="email" name="email" id="email" placeholder='Enter your email' required />
                </div>

                <div className='relative'>
                    <label className='font-semibold' htmlFor="email">Password</label>
                    <input className='w-full mt-2  mb-6 py-4 px-5 rounded-md border-2 outline-none' type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' required />
                    <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='absolute right-3 bottom-10 text-2xl text-gray-400 cursor-pointer'> {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                </div>

                <div>
                    <input className='w-full mt-2 bg-red-500 text-white py-4 text-lg font-semibold rounded-md cursor-pointer' type="submit" value="Register" />
                </div>
            </form>

            <div className='mt-5'>
                <p className='text-center text-lg'> or  </p>
                <div >
                    <button className='border-2 bg-gray-100 hover:bg-gray-200 mx-auto mt-5 border-black rounded-md flex items-center gap-2 px-5  font-semibold  py-4'><BsGoogle className='text-xl' /> Continue with Google</button>
                </div>
            </div>
            <p className='text-center mt-5 text-sm'>Already have an account? <Link to="/login" className='text-red-500  font-bold hover:underline'>Login</Link></p>
        </div>

    </>
}

export default Register