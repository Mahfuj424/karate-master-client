/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (user) {
        return children
    }

    if (loading) {
       return  <progress className="progress progress-success w-56"></progress>
    }

    

    return (
        <Navigate to='/login' state={{pathName: location}}></Navigate>
    );
};

export default PrivetRoute;