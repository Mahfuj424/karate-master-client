import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Regiser from "../Pages/Register/Regiser";
import Login from "../Pages/Login/Login";


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
      
}
])
export default Router;