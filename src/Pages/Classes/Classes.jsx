import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Classes = () => {

     const [axiosSecure] = useAxiosSecure()
     const [classesData, setClassesData] = useState([])
     console.log(classesData);
     
     useEffect(() => {
          axiosSecure.get('http://localhost:5000/classesData')
               .then(result => {
                    setClassesData(result.data)
               })
               .catch(err => {
               console.log(err.message);
          })
     },[])


     return (
          <div className="py-32 grid grid-cols-1 md:grid-cols-3 w-full mx-auto">
               {
                    classesData.map(classes => {
                         return <div key={classes._id} className="card w-96 bg-gray-800 text-white shadow-xl">
                         <figure className="px-10 pt-10">
                                   <img src={classes.image} alt="Shoes" className="rounded-xl" />
                         </figure>
                         <div className="card-body text-start">
                              <h2 className="text-xl">Class Name:  {classes.className}</h2>
                              <h2 className="">Instructor Name:  {classes.instructorName}</h2>
                              <p>{classes.email}</p>
                              <div className="card-actions">
                                   <button className="btn btn-error">Buy Now</button>
                              </div>
                         </div>
                    </div>
                    })
               }
              
          </div>
     );
};

export default Classes;