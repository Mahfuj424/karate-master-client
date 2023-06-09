
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const Regiser = () => {

     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
     const navigate = useNavigate();

     const handleGoogleUser = () => {
          googleSignIn()
          .then(result => {
               navigate('/')
               console.log(result);
          })
          .catch(err => console.log(err.message))
     }

     const onSubmit = data => {

          createUser(data.email, data.password)
               .then(result => {

                    const loggedUser = result.user;
                    console.log(loggedUser);

                    updateUserProfile(data.name, data.photoURL)
                         .then(() => {
                              const saveUser = { name: data.name, email: data.email }
                              fetch('https://bistro-boss-server-fawn.vercel.app/users', {
                                   method: 'POST',
                                   headers: {
                                        'content-type': 'application/json'
                                   },
                                   body: JSON.stringify(saveUser)
                              })
                                   .then(res => res.json())
                                   .then(data => {
                                        if (data.insertedId) {
                                             reset();
                                             Swal.fire({
                                                  position: 'top-end',
                                                  icon: 'success',
                                                  title: 'User created successfully.',
                                                  showConfirmButton: false,
                                                  timer: 1500
                                             });
                                             navigate('/');
                                        }
                                   })



                         })
                         .catch(error => console.log(error))
               })
     };

     return (
          <div>
               <div className="hero min-h-screen">
                    <div className="hero-content">
                         <div className="card shadow-2xl bg-gray-700 text-white w-96">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered text-black" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                   </div>
                                   <div>
                                        <label htmlFor='image' className='block mb-2 text-sm'>
                                             Select Image:
                                        </label>
                                        <input {...register("image", { required: true })}
                                             required
                                             type='file'
                                             id='image'
                                             name='image'
                                             accept='image/*'
                                        />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered text-black" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password"  {...register("password", {
                                             required: true,
                                             minLength: 6,
                                             maxLength: 20,
                                             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className="input input-bordered text-black" />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <input className="btn bg-red-400 border-none hover:bg-red-500" type="submit" value="Sign Up" />
                                   </div>
                                   <div className="">
                                   <button className='btn border-none w-full hover:bg-red-500 bg-red-400 ' onClick={handleGoogleUser}><span><FcGoogle /></span>Google</button>
                              </div>
                              </form>
                              
                              <p className="p-3"><small>Already have an account <Link to="/login">Login</Link></small></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Regiser;