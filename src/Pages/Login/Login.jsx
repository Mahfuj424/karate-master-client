import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
     const {  signIn, googleSignIn } = useContext(AuthContext);
     const navigate = useNavigate();

    const onSubmit = () => {
        signIn()
            .then(result => {
            navigate('/')
            })
            .catch(err => {
            console.log(err.message);
        })
    }

    const handleGoogleUser = () => {
        googleSignIn()
            .then(result => {
            navigate('/')
            })
            .catch(err => {
            console.log(err.message);
        })
    }

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

export default Login;