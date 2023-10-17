import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"

import logo from "../../assets/images/logo.png"

const Nav = () => {


    const navLinks = <>
        <li className='font-semibold text-lg'><NavLink className="hover:bg-transparent hover:underline" to="/">Home</NavLink></li>
        <li className='font-semibold text-lg '> <NavLink className="hover:bg-transparent hover:underline" to="/addProduct">Add Product</NavLink></li>
        <li className='font-semibold text-lg'><NavLink className="hover:bg-transparent hover:underline" to="/cart">My Cart</NavLink></li>

    </>


    return <div className="drawer lg:px-10 lg:py-5">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
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
                        <button className='bg-[#0802A3] ml-4 text-white font-semibold text-lg px-6 py-2 rounded-md'>Login</button>
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
                <button className='bg-[#0802A3] text-white font-semibold text-lg px-6 py-3 rounded-md'>Login</button>
            </ul>

        </div>
    </div>
}

export default Nav