import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";



const AddClass = () => {

     const { user } = useContext(AuthContext)
     console.log(user);

     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const className = form.className.value;
          const image = form.image.value;
          const instructorName = user.displayName;
          const instructorEmail = user.email;
          const availableSeats = form.seats.value;
          const price = form.price.value;


          const addClass = {
               className, image, instructorName, instructorEmail, availableSeats, price, status: 'pending'
          }
          console.log(addClass);

          fetch('https://martial-arts-server-blush.vercel.app/addClass', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(addClass)
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
          <div>
               <div className="hero min-h-screen mt-5">
                    <div className="hero-content flex-col">
                         <div className="text-center lg:text-left">
                              <h1 className="text-5xl text-white font-bold text-center">Add A Class</h1>

                         </div>
                         <div className="bg-gray-500 w-full rounded-xl">
                              <form onSubmit={handleSubmit} className="">
                                   <div className="flex gap-8  p-5">
                                        <div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text text-white">Class Name</span>
                                                  </label>
                                                  <input type="text" name="className" placeholder="class name" className="input input-bordered" />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text text-white">Image</span>
                                                  </label>
                                                  <input type="text" name="image" placeholder="image" className="input input-bordered" />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text text-white">Instructor Name</span>
                                                  </label>
                                                  <input type="text" name="name" placeholder="name" defaultValue={user.displayName} readOnly className="input input-bordered" />
                                             </div>
                                        </div>
                                        <div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text text-white">Instructor Email</span>
                                                  </label>
                                                  <input type="email" name="email" placeholder="email" defaultValue={user.email} readOnly className="input input-bordered" />
                                             </div>

                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text text-white">Available Seats</span>
                                                  </label>
                                                  <input type="number" name="seats" placeholder="available seats" className="input input-bordered" />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text text-white">Price</span>
                                                  </label>
                                                  <input type="number" name="price" placeholder="$price" className="input input-bordered" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className="form-control p-5 mt-6">
                                        <button className="btn bg-gray-600 text-white hover:bg-gray-600 border-none">Login</button>
                                   </div>


                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AddClass;