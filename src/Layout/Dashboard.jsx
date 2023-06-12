import { NavLink, Outlet } from "react-router-dom";
import {  FaWallet,  FaHome, FaBook, } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";

const Dashboard = () => {
     const isAdmin = true;
     const isStudent = false;
     const isInstructor = false;

     return (
          <div className="drawer lg:drawer-open ">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

               </div>
               <div className="drawer-side bg-black">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white">


                         {isAdmin &&
                              <>
                              <h1 className="text-3xl font-semibold text-center mb-5">Admin</h1>
                                   <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                   <li><NavLink to="/dashboard/manageClass"><FaBook></FaBook>Manage Classes</NavLink></li>
                                   <li><NavLink to="/dashboard/manageUser"><RxAvatar />Manage User</NavLink></li>
                              </>
                         }

                         {isInstructor &&
                              <>
                              <h1 className="text-3xl font-semibold text-center mb-5">Instructor</h1>
                                   <li><NavLink to="/dashboard/kjalsfj"><FaHome></FaHome>Instructor Home</NavLink></li>
                                   <li><NavLink to="/dashboard/addClass"><FaBook></FaBook>Add A Class</NavLink></li>
                                   <li><NavLink to="/dashboard/myClass"><FaBook></FaBook>My Classes</NavLink></li>
                              </>
                         }


                         {isStudent &&
                              <>
                              <h1 className="text-3xl font-semibold text-center mb-5">Student</h1>
                                   <li><NavLink to="/dashboard/studentHome"><FaHome></FaHome>Student Home</NavLink></li>
                                   <li><NavLink to="/dashboard/myClasses"><FaBook></FaBook>My Selected Classes</NavLink></li>
                                   <li><NavLink to="/dashboard/enrolledClasses"><FaBook></FaBook>My Enrolled Classes</NavLink></li>
                                   <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink></li>
                              </>
                         }


                         
                         <hr  className="my-8"/>
                         <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                         <li><NavLink to="/classes"><FaBook></FaBook>Classes</NavLink></li>
                    </ul>

               </div>
          </div>
     );
};

export default Dashboard;