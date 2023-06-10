import { NavLink, Outlet } from "react-router-dom";
import {  FaWallet,  FaHome, FaBook, } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
     //     const [cart] = useCart();

     // TODO: load data from the server to have dynamic isAdmin based on Data
     const isAdmin = false;
     const isStudent = true;
     const isInstructor = false;

     return (
          <div className="drawer lg:drawer-open ">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

               </div>
               <div className="drawer-side bg-gray-600">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white">


                         {isAdmin &&
                              <>
                                   <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                   <li><NavLink to="/dashboard/adminhome"><FaBook></FaBook>Manage Classes</NavLink></li>
                                   <li><NavLink to="/dashboard/adminhome"><RxAvatar />Manage User</NavLink></li>
                              </>
                         }

                         {isInstructor &&
                              <>
                                   <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Instructor Home</NavLink></li>
                                   <li><NavLink to="/dashboard/adminhome"><FaBook></FaBook>Add A Class</NavLink></li>
                                   <li><NavLink to="/dashboard/adminhome"><FaBook></FaBook>My Classes</NavLink></li>
                              </>
                         }


                         {isStudent &&
                              <>
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