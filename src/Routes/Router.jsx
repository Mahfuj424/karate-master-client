import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/instructor/Instructor";
import Classes from "../Pages/Classes/Classes";


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
            path: '/classes',
            element: <Classes/>
         }
      ]
      
}
])
export default Router;