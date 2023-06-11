
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const ManageClasses = () => {

     const [axiosSecure] = useAxiosSecure();
     const [allClass, setAllClass] = useState([])
     console.log(allClass);

     useEffect(() => {
          axiosSecure.get('/addClass')
               .then(result => {
                    console.log(result.data);
                    setAllClass(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])


     return (
          <div>
               <div className="overflow-x-auto">
                    <table className="table bg-gray-600 text-white w-[97%] mx-auto mt-10">
                    {/* head */}
                         <thead>
                              <tr className="text-white">
                                   <th>#</th>
                                   <th>class Image</th>
                                   <th>Class Name</th>
                                   <th>Instructor Name</th>
                                   <th>Instructor Email</th>
                                   <th>Available Seats</th>
                                   <th>Price</th>
                                   <th>Status</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody >
                              {
                                   allClass?.map((singleClass, index) => {
                                        return <tr key={singleClass._id}>
                                             <th>{index+1}</th>
                                             <td>
                                                  <div>
                                                       <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                 <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                       </div>
                                                  </div>
                                             </td>
                                             <td>{singleClass.className}</td>
                                             <td>{singleClass.instructorName}</td>
                                             <td>{singleClass.instructorEmail}</td>
                                             <th className="text-center">{singleClass.availableSeats}</th>
                                             <th className="text-center">{0}</th>
                                             <th className="text-center">{singleClass.status}</th>
                                             <th className="flex gap-2 flex-col">
                                                  <button className="btn btn-xs hover:bg-black bg-gray-600 text-white">Approve</button>
                                                  <button className="btn btn-xs hover:bg-black bg-gray-600 text-white">Deny</button>
                                                  <button className="btn btn-xs hover:bg-black bg-gray-600 text-white">Feedback</button>
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

export default ManageClasses;