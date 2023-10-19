import React, { useContext, useState } from 'react'
import logo from '../../assets/images/logo.png'

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { UserContext } from '../../firebase/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { loginUser, registerWithGoogle } = useContext(UserContext);

    const handleUserLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(userCredential => {
                if (userCredential.user) {
                    form.reset();
                    Swal.fire({
                        title: "Logged In",
                        text: "You are successfully logged in!",
                        icon: "success"
                    })
                        .then(result => {
                            if (result.isConfirmed) {
                                location.state ? navigate(location.state) : navigate("/")
                            }
                        })

                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                })
            })
    }





    //Register with Google
    const handleGoogleRegister = () => {
        registerWithGoogle()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Logged in",
                        text: "Your account has been logged in successfully!",
                        icon: "success"
                    })
                        .then(result => {
                            if (result.isConfirmed) {
                                location.state ? navigate(location.state) : navigate("/")
                            }
                        })
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    title: error.message,
                    icon: "error"
                })
            })
    }




    return <div className='p-5'>

        <Nav />

        <div className='lg:w-1/2 mx-auto my-10 md:border-2 md:p-10 container m-5'>
            <img src={logo} className='w-[200px] hidden md:block mx-auto' alt="" />
            <h3 className='font-semibold text-3xl  mb-2 mt-5'>Login</h3>
            <p className='text-gray-500 text-sm'>Enter your details to login to your account.</p>

            <form className='mt-14' onSubmit={handleUserLogin}>
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
                    <input className='w-full mt-2 bg-red-500 text-white py-4 text-lg font-semibold rounded-md cursor-pointer' type="submit" value="Login" />
                </div>
            </form>

            <div className='mt-5'>
                <p className='text-center text-lg'> or  </p>
                <div >
                    <button onClick={handleGoogleRegister} className='border-2 bg-gray-100 hover:bg-gray-200 mx-auto mt-5 border-black rounded-md flex items-center gap-2 px-5  font-semibold  py-4'><BsGoogle className='text-xl' /> Continue with Google</button>
                </div>
            </div>
            <p className='text-center mt-5 text-sm'>Don't have an account? <Link state={location.state} to="/register" className='text-red-500  font-bold hover:underline'>Register</Link></p>
        </div>

    </div>
}

export default Login