
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AdminRole, InstructorRole } from "../../../Hooks/SaveUser";
import { toast } from "react-toastify";
import Swal from "sweetalert2";



const ManageUser = () => {

     const { user } = useContext(AuthContext);
     // const [allClass, setAllClass]=useState([])
     console.log(user);

     const [refresh, setRefresh]=useState(false)

     const [axiosSecure] = useAxiosSecure();

     const [userData, setUserData] = useState([])
     console.log(userData);

     const handleInstructor = email => {
          InstructorRole(email)
               .then(data => {
                    console.log(data);
                    setRefresh(!refresh)
                    if (data.modifiedCount > 0) {
                         Swal.fire({
                             title: 'Success!',
                             text: 'You Are Now Instructor',
                             icon: 'success',
                             confirmButtonText: 'Done'
                         })
                     }
                    toast.success('you are a instructor')
               })
     }


     const handleAdmin = email => {
          AdminRole(email)
               .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                         Swal.fire({
                             title: 'Success!',
                             text: 'You Are Now Admin',
                             icon: 'success',
                             confirmButtonText: 'Done'
                         })
                     }
               })
     }

     useEffect(() => {
          axiosSecure.get('http://localhost:5000/user')
               .then(result => {
                    console.log(result.data);
                    setUserData(result.data)
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
                              {
                                   userData?.map((user, index) => {
                                        console.log(user);
                                        return <tr key={user._id}>
                                             <th>{index + 1}</th>
                                             <td>{user.name}</td>
                                             <td>{user.email}</td>
                                             <th>{user.role}</th>
                                             <th className="flex gap-2 flex-col">
                                                  <button onClick={() => handleInstructor(user?.email)} className="btn btn-xs hover:bg-black bg-gray-600 text-white">Instructor</button>
                                                  <button onClick={() => handleAdmin(user?.email)} className="btn btn-xs hover:bg-black bg-gray-600 text-white">Admin</button>
                                             </th>
                                        </tr>
                                   })
                              }

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageUser;