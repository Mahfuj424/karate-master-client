import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
// import { AuthContext } from "../../Provider/AuthProvider";


const Classes = () => {
     // const {user}=useContext(AuthContext)
     const { user } = useContext(AuthContext)

     const [axiosSecure] = useAxiosSecure()
     const [classesData, setClassesData] = useState([])
     // const {className, instructorName, availableSeats, price, image,  } = classesData;
     // console.log(classesData);



     //  console.log(user?.email, className, instructorName, availableSeats, price, image );

     useEffect(() => {
          axiosSecure.get('https://martial-arts-server-blush.vercel.app/classesData')
               .then(result => {
                    setClassesData(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])




     const handleSelected = (classes) => {
          console.log(classes);
          const { className, instructorName, availableSeats, image, price } = classes;

          const selectedClass = { className, instructorName, availableSeats, image, instructorEmail: user?.email, price }


          fetch('https://martial-arts-server-blush.vercel.app/selected', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(selectedClass)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Successfully Add Class',
                              showConfirmButton: false,
                              timer: 1500
                         })
                    }
               })
     }




     return (
          <div className="py-32 grid grid-cols-1 md:grid-cols-3 w-full mx-auto">
               <Helmet>
                    <title>MARTIAL ARTS | CLASSES</title>
               </Helmet>
               {
                    classesData.map(classes => {
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
                                        <button onClick={() => handleSelected(classes)} className="btn btn-error">Select</button>
                                   </div>
                              </div>
                         </div>
                    })
               }

          </div>
     );
};

export default Classes;