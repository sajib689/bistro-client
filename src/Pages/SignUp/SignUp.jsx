import { useContext } from 'react';
import authenticationImg from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
        .then( result => {
            const user = result.user
            if(user) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Sign up success!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            form.reset()
        })
    }
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col md:flex-row">
            <div className="text-center md:w-1/2 lg:text-left">
                
              <img src={authenticationImg} alt="" />
            </div>
            <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className='text-5xl font-bold text-center mt-2'>Sign up now!</h1>
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
             
                <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Login'/>
                </div>
              </form>
              <p className='text-center'><small>Are you have an account? <Link to='/login'>Login</Link></small></p>
            </div>
          </div>
        </div>
      </>
    );
};

export default SignUp;