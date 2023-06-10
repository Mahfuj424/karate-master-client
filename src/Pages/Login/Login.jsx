import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location.state?.from?.pathname || '/'

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                navigate(pathName)
                console.log(result);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleGoogleUser = () => {
        googleSignIn()
            .then(() => {
                navigate(pathName)
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
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password"  {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered text-black" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-red-400 border-none hover:bg-red-500" type="submit" value="Login" />
                            </div>
                            <div className="">
                                <button className='btn border-none w-full hover:bg-red-500 bg-red-400 ' onClick={handleGoogleUser}><span><FcGoogle /></span>Google</button>
                            </div>
                        </form>

                        <p className="p-3"><small>Already have an account <Link to="/register">register</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;