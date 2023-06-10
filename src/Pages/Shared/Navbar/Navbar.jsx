/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg'
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaArrowAltCircleRight } from "react-icons/fa"
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
     const { user, logOut } = useContext(AuthContext);


     const handleLogout = () => {
          logOut()
     }

     const navItems = <div className='flex gap-5 items-center'>
          <p className='hover:text-red-400'><NavLink
               to="/"
               className={({ isActive }) =>
                   isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Home
          </NavLink></p>
          <p className='hover:text-red-400 cursor-pointer'><NavLink
               to="/instructor"
               className={({ isActive  }) =>
                     isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Instructor
          </NavLink></p>
          <p className='hover:text-red-400'><NavLink
               to="/classes"
               className={({ isActive }) =>
                     isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Classes
          </NavLink></p>
          <p className='hover:text-red-400'><NavLink
               to="/dashboard"
               className={({ isActive }) =>
                    isActive ? "text-red-400 border-b-2" : ""
               }
          >
               Dashboard
          </NavLink></p>
          {
               user ?

                    <button className='flex items-center gap-1' onClick={handleLogout}>LogOut <FaArrowAltCircleRight/></button>
                    :
                    <>

                         <p className='hover:text-red-400'><NavLink
                              to="/register"
                              className={({ isActive }) =>
                                  isActive ? "text-red-400 border-b-2" : ""
                              }
                         >
                              Register
                         </NavLink></p>
                         <p className='hover:text-red-400'><NavLink
                              to="/login"
                              className={({ isActive }) =>
                                  isActive ? "text-red-400 border-b-2" : ""
                              }
                         >
                              Login
                         </NavLink></p>
                    </>
          }
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
                         {
                              user ? <img className='w-12 h-12 rounded-full' src={`${user?.photoURL}`} alt="" />
                                   : <RxAvatar className='w-12 h-12'/>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Navbar;