
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
const MyClass = () => {

     const [myClass, setMyClass] = useState();

     useEffect(() => {
          fetch('https://martial-arts-server-blush.vercel.app/addClass')
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    setMyClass(data)
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
                                   <th>cover Image</th>
                                   <th>Class Name</th>
                                   <th>Status</th>
                                   <th>Enrolled</th>
                                   <th>Available Seats</th>
                                   <th>Price</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody >
                              {
                                   myClass?.map((topic, index) => {
                                        return <tr key={topic._id}>
                                             <th>{index + 1}</th>
                                             <td>
                                                  <div>
                                                       <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                 <img src={topic.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                       </div>
                                                  </div>
                                             </td>
                                             <td>{topic.className}</td>
                                             <td>{topic.status}</td>
                                             <th className="text-center">0</th>
                                             <th className="text-center">{topic.availableSeats}</th>
                                             <th className="text-center">{topic.price}</th>
                                             <th>
                                                  <Link to={`/dashboard/updateClass/${topic._id}`}><p className="btn btn-success"><FiEdit /></p></Link>
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

export default MyClass;