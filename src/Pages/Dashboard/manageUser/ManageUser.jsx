
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const ManageUser = () => {

     const { user } = useContext(AuthContext);
     // const [allClass, setAllClass]=useState([])

     const [axiosSecure] = useAxiosSecure();


     const userInfo = { name: user?.displayName, email: user?.email, role: 'student' }

     useEffect(() => {
          fetch('http://localhost:5000/user', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(userInfo)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
               })
     }, [])


     useEffect(() => {
          axiosSecure.get('http://localhost:5000/addClass')
               .then(result => {
                    console.log(result);
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])

     return (
          <div>
               <div className="overflow-x-auto">
                    <table className="table bg-gray-600 text-white w-3/4 mx-auto mt-10">
                         {/* head */}
                         <thead>
                              <tr className="text-white">
                                   <th>#</th>
                                   <th>User Name</th>
                                   <th>User Email</th>
                                   <th>Role</th>
                                   <th className="text-center">Action</th>
                              </tr>
                         </thead>
                         <tbody >
                              <tr>
                                   <th>{ }</th>
                                   <td>{user.displayName}</td>
                                   <td>{user.email}</td>
                                   <th>role</th>
                                   <th className="flex gap-2 flex-col">
                                        <button className="btn btn-xs hover:bg-black bg-gray-600 text-white">Instructor</button>
                                        <button className="btn btn-xs hover:bg-black bg-gray-600 text-white">Admin</button>
                                   </th>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageUser;