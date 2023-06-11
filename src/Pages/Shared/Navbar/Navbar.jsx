import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx'
import logo from '../../../assets/images/logo.jpg'
import { BiArrowFromLeft } from 'react-icons/bi'
import { AuthContext } from '../../../Provider/AuthProvider';
const Navbar = () => {
     const { user, logOut } = useContext(AuthContext)
     const navItem = <div className='md:space-x-8 space-y-3 text-white md:space-y-0 pb-2 mb:pb-0 md:flex'>
          <p className='text-lg hover:text-rose-500 transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500' : ''} to='/'>Home</NavLink></p>
          <p className='text-lg hover:text-rose-500 transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500' : ''} to='/instructor'>Instructors</NavLink></p>
          <p className='text-lg hover:text-rose-500 transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500' : ''} to='/classes'>Classes</NavLink></p>
          <p className='text-lg hover:text-rose-500 transition-all'>{user && <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500' : ''} to='/dashboard'>Dashboard</NavLink>}</p>
          <p className='text-lg hover:text-rose-500 transition-all '> {
               user ?
                    <NavLink onClick={() => logOut()}><span className='flex items-center gap-1'>
                          <span>LogOut</span> <BiArrowFromLeft /></span></NavLink>
                    :
                    <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-rose-500 border-rose-500' : ''} to='/login'>Login</NavLink>
                    
          }</p>



     </div>
     return (
          <div className='fixed font-semibold pt-4 w-full z-10 bg-transparent'>
               <div className="navbar container p-0">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 md:flex items-center">
                                   {navItem}
                              </ul>
                         </div>
                         <Link to='/' className="text-xl  flex items-center cursor-pointer">
                              <img className='w-[50px]' src={logo} alt="" /> <span className='text-white ms-2'>Karate Master</span>
                         </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal items-center px-1">
                              {navItem}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className="avatar">
                              <div className=" w-[40px] rounded-full ">
                                   {user ? <img title={user?.displayName} src={user?.photoURL} /> : <RxAvatar className='text-white' size={40} />}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;