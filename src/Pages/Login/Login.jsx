import { Link,useNavigate  } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Login = () => {
 const navigate = useNavigate()
 const {signInUser} = useAuth()
 const handleSignIn = (e)=>{
    e.preventDefault()
    // get field values 
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

     //   user sign in
     signInUser(email,password)
     .then(() => {
        toast.success('User logged in successfully');
        navigate('/')
    })
    .catch(error => {
        toast.error(error.message)
    })
 }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn}
                         className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Login</button>
                                <ToastContainer></ToastContainer>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;