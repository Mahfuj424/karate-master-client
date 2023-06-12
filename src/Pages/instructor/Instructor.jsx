import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";



const Instructor = () => {

     const [axiosSecure] = useAxiosSecure();

     const [instructorData, setInstructorData] = useState([]);
     console.log(instructorData);


     useEffect(() => {
          axiosSecure.get(`https://martial-arts-server-blush.vercel.app/instructorData`)
               .then(result => {
                    setInstructorData(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])


     return (
          <div className="py-32  grid md:grid-cols-3 grid-cols-1">
               <Helmet>
                    <title>MARTIAL ARTS | INSTRUCTOR</title>
               </Helmet>
               {
                    instructorData.map(instructor => {
                         return <div key={instructor._id} className="card w-96 bg-gray-800 text-white shadow-xl">
                              <figure className="px-10 pt-10">
                                   <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                              </figure>
                              <div className="card-body items-center text-center">
                                   <h2 className="card-title">{instructor.name}</h2>
                                   <p>{instructor.email}</p>
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

export default Instructor;