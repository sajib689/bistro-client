import { Link, useNavigate } from "react-router-dom";
import authenticationImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const SignUp = () => {
  const {createUser,updateUserProfile} = useContext(AuthContext)
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = data => {
    createUser(data.email, data.password)
    .then( result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then( () => {
        console.log('Profiled Update')
        reset()
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign up success!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: `Oops...${error.message}`,
          text: "Something went wrong!",
        });
      })    
    })
    
  };
  return (
    <>
    <Helmet><title>Bistro Boss | Sign Up</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={authenticationImg} alt="" />
          </div>
          <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-2">
              Sign up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                {...register("name", {required: true})}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
               
                />
                 {errors.name && <span className="text-red-400">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email",{required: true})}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                
                />
                {errors.email && <span className="text-red-400">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                {...register("photoURL",{required: true})}
                  type="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                
                />
                {errors.photoURL && <span className="text-red-400">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password",{required: true, minLength: 6, maxLength:20})}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                 
                />
                {errors.password && <span className="text-red-400">Password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                Are you have an account? <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
