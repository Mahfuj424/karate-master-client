/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg'

const Navbar = () => {

     const navItems = <div className='flex gap-5'>
          <a><NavLink
               to="/"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Home
          </NavLink></a>
          <a><NavLink
               to="/instructor"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Instructor
          </NavLink></a>
          <a><NavLink
               to="/classes"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Classes
          </NavLink></a>
          <a><NavLink
               to="/dashboard"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Dashboard
          </NavLink></a>
     </div>
     return (
          <div className='z-10 bg-black shadow-2xl  h-22 pt-3 text-white'>
               <div className="navbar container ">
                    <div className="navbar-start ">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   {navItems}
                              </ul>
                         </div>
                         <a className="uppercase text-lg flex gap-5"> <img className='w-14 h-14 rounded-xl' src={logo} alt="" /><p>first karate <br /> martial arts school</p></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <button className='btn '>button</button>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;