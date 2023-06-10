import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Regiser from "../Pages/Register/Regiser";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClass/EnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
// import PrivetRoute from "../PrivetRoute/PrivetRoute";


const Router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'instructor',
            element: <Instructor/>,
         },
         {
            path: 'classes',
            element: <Classes/>
         },
         {
            path: 'register',
            element: <Regiser/>,
         },
         {
            path: 'login',
            element: <Login/>
         }
      ]
      
   },
   {
      path: 'dashboard',
      element: <Dashboard />,
      children: [
         {
            path: '/dashboard',
            element: <StudentHome/>
         },
         {
            path: 'myClasses',
            element: <MyClasses/>
         },
         {
            path: 'enrolledClasses',
            element: <EnrolledClasses/>
         },
         {
            path: 'payment',
            element: <Payment/>
         }
      ]
   }
])
export default Router;