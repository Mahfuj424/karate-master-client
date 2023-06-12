import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Provider/AuthProvider";


const SelectClass = () => {

     const { user } = useContext(AuthContext)


     const [classesData, setClassesData] = useState([])
     console.log(classesData);


     useEffect(() => {
          fetch(`https://martial-arts-server-blush.vercel.app/select/${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    setClassesData(data)
               })
     }, [])

     console.log(classesData);

     return (
          <div className="grid grid-cols-1 md:grid-cols-3 pt-10 ms-5">
               {
                    classesData?.map(classes => {

                         return <div key={classes._id} className="card w-96 bg-gray-800 text-white shadow-xl">
                              <figure className="px-10 pt-10">
                                   <img src={classes.image} alt="Shoes" className="rounded-xl" />
                              </figure>
                              <div className="card-body text-start">
                                   <h2 className="text-xl">Class Name:  {classes.className}</h2>
                                   <h2 className="">Instructor Name:  {classes.instructorName}</h2>
                                   <h3>Available Seats :  {classes.availableSeats}</h3>
                                   <h3>Price :  {classes.price}</h3>
                                   <p>{classes.email}</p>
                                   <div className="card-actions">
                                        <button className="btn btn-error">Select</button>
                                   </div>
                              </div>
                         </div>
                    })
               }
          </div>
     );
};

export default SelectClass;