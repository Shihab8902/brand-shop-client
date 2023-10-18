import React, { useContext, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../firebase/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();

    const { createUser, registerWithGoogle } = useContext(UserContext);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState(false);



    const handleUserRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;



        //Reset password error
        setPasswordError(false);


        if (password.length < 6) {
            setPasswordError(true);
            toast.error("Password must be at least 6 character!");
            return;
        }


        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setPasswordError(true);
            toast.error("Password should contain at least one uppercase character!");
            return;
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setPasswordError(true);
            toast.error("Password should contain at least one special character!");
            return;
        }



        createUser(email, password)
            .then(userCredential => {
                updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photoURL
                });

                form.reset();

                Swal.fire({
                    title: "Registered",
                    text: "Your account has been registered successfully!",
                    icon: "success"
                })
                    .then(result => {
                        if (result.isConfirmed) {
                            navigate("/")
                        }
                    })


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
                        title: "Registered",
                        text: "Your account has been registered successfully!",
                        icon: "success"
                    })
                        .then(result => {
                            if (result.isConfirmed) {
                                navigate("/")
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




    return <div className='p-5'>

        <div className='lg:w-1/2 mx-auto my-10 md:border-2  md:p-10  container '>
            <img src={logo} className='w-[200px] mx-auto' alt="" />
            <h3 className='font-semibold text-3xl  mb-2 mt-10 md:mt-5'>Register</h3>
            <p className='text-gray-500 text-sm'>Enter your details to  register your account.</p>

            <form className='mt-14' onSubmit={handleUserRegister}>
                <div>
                    <label className='font-semibold' htmlFor="name">Name</label>
                    <input className='w-full mb-6 mt-2  py-4 px-5 rounded-md border-2 outline-none' type="text" name="name" id="name" placeholder='Enter your name' required />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="email">Email</label>
                    <input className='w-full mt-2  mb-6 py-4 px-5 rounded-md border-2 outline-none' type="email" name="email" id="email" placeholder='Enter your email' required />
                </div>

                <div>
                    <label className='font-semibold' htmlFor="photoURL">PhotoURL</label>
                    <input className='w-full mt-2  mb-6 py-4 px-5 rounded-md border-2 outline-none' type="text" name="photoURL" id="photoURL" placeholder='Provide a photo URL (optional)' />
                </div>

                <div className='relative'>
                    <label className='font-semibold' htmlFor="email">Password</label>
                    <input className={`w-full mt-2  mb-6 py-4 px-5 rounded-md ${passwordError ? "border-2 border-red-600" : "border-2"} outline-none`} type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' required />
                    <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='absolute right-3 bottom-10 text-2xl text-gray-400 cursor-pointer'> {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                </div>

                <div>
                    <input className='w-full mt-2 bg-red-500 text-white py-4 text-lg font-semibold rounded-md cursor-pointer' type="submit" value="Register" />
                </div>
            </form>

            <div className='mt-5'>
                <p className='text-center text-lg'> or  </p>
                <div >
                    <button onClick={handleGoogleRegister} className='border-2 bg-gray-100 hover:bg-gray-200 mx-auto mt-5 border-black rounded-md flex items-center gap-2 px-5  font-semibold  py-4'><BsGoogle className='text-xl' /> Continue with Google</button>
                </div>
            </div>
            <p className='text-center mt-5 text-sm'>Already have an account? <Link to="/login" className='text-red-500  font-bold hover:underline'>Login</Link></p>
        </div>

        <ToastContainer />
    </div>
}

export default Register