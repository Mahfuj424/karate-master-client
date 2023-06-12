/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
     return (
          <div>
               <Navbar/>
               <Outlet />
               <Footer/>
          </div>
     );
};

export default Main;