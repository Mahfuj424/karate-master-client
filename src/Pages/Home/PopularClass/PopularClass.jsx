import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PopularClass = () => {

     const [axiosSecure] = useAxiosSecure()
     const [classData, setClassData] = useState([])



     useEffect(() => {
          axiosSecure.get('http://localhost:5000/addClass')
               .then(result => {
                    setClassData(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])

     return (
          <div className="w-full mx-auto my-20">

                    <h1 className="text-4xl font-bold text-white my-8 text-center">Popular Classes</h1>
               <div className="grid md:grid-cols-3 grid-cols-1">
                    {
                         classData?.map(classes => {

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
          </div>
     );
};

export default PopularClass;