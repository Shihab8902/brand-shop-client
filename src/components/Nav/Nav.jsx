import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./nav.css"
import logo from "../../assets/images/logo.png"
import { UserContext } from '../../firebase/AuthProvider'

import userPlaceholder from '../../assets/images/user.png'
import Swal from 'sweetalert2'

const Nav = () => {
    const navigate = useNavigate();

    const { user, logOutUser } = useContext(UserContext);

    const navLinks = <>
        <li className='font-medium text-lg'><NavLink className="hover:bg-transparent hover:underline" to="/">Home</NavLink></li>
        <li className='font-medium text-lg '> <NavLink className="hover:bg-transparent hover:underline" to="/addProduct">Add Product</NavLink></li>
        <li className='font-medium text-lg'><NavLink className="hover:bg-transparent hover:underline" to="/cart">My Cart</NavLink></li>

    </>


    const handleLogOut = () => {
        Swal.fire({
            title: 'Log out?',
            text: "Are you sure want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then(result => {
            if (result.isConfirmed) {
                logOutUser();
                navigate("/")
            }
        })


    }


    return <div className="drawer container mx-auto lg:py-5 z-20 ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            <div className="w-full navbar ">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2"><img className='w-[180px]' src={logo} alt="" /></div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal">
                        {
                            navLinks
                        }
                        <div className='flex items-center' title={user?.displayName}>
                            {
                                user && <div title={user.displayName} className='flex items-center border-2 rounded-lg px-3 py-1  gap-2 bg-gray-50'>
                                    <img className='w-[40px] block h-[40px] rounded-full' src={user.photoURL ? user.photoURL : userPlaceholder} alt="" />
                                    <p className='font-semibold text-sm'>
                                        {
                                            user.displayName ? user.displayName.length > 6 ? user.displayName.slice(0, 6) + "..." : user.displayName : "User"
                                        }
                                    </p>
                                </div>
                            }
                            {
                                user ? <button onClick={handleLogOut} className='bg-red-500 ml-4 text-white font-medium text-lg px-6 py-2 rounded-md'>Log out</button> : <Link to="/login"> <button className='bg-[#0802A3] ml-4 text-white font-medium text-lg px-6 py-2 rounded-md'>Login</button></Link>
                            }
                        </div>
                    </ul>

                </div>
            </div>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
                {
                    navLinks
                }
                <div className='flex items-center' title={user?.displayName}>
                    {
                        user && <div title={user.displayName} className='flex items-center border-2 rounded-lg px-3 py-1 bg-gray-50  gap-2'>
                            <img className='w-[40px] block h-[40px] rounded-full' src={user.photoURL ? user.photoURL : userPlaceholder} alt="" />
                            <p className='font-semibold text-sm'>
                                {
                                    user.displayName ? user.displayName.length > 6 ? user.displayName.slice(0, 6) + "..." : user.displayName : "User"
                                }
                            </p>
                        </div>
                    }
                    {
                        user ? <button onClick={handleLogOut} className='bg-red-500 ml-4 text-white font-medium text-lg px-6 py-2 rounded-md'>Log out</button> : <Link to="/login"> <button className='bg-[#0802A3] ml-4 text-white font-medium text-lg px-6 py-2 rounded-md'>Login</button></Link>
                    }
                </div>
            </ul>

        </div>
    </div>
}

export default Nav